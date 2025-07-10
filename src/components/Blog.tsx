import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query, doc, updateDoc, arrayUnion, arrayRemove, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarDays, Clock, Heart, MessageCircle, Send, Trash2 } from 'lucide-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  tags: string[];
  likes?: string[];
  likesCount?: number;
}

interface Comment {
  id: string;
  postId: string;
  userId: string;
  userEmail: string;
  userName: string;
  text: string;
  createdAt: Date;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<{ [postId: string]: Comment[] }>({});
  const [newComment, setNewComment] = useState('');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [user] = useAuthState(auth);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, 'blog-posts'), orderBy('publishedAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const blogPosts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          publishedAt: doc.data().publishedAt?.toDate() || new Date(),
          likes: doc.data().likes || [],
          likesCount: doc.data().likes?.length || 0
        })) as BlogPost[];
        setPosts(blogPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const fetchComments = async (postId: string) => {
    try {
      const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const allComments = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date()
      })) as Comment[];
      
      const postComments = allComments.filter(comment => comment.postId === postId);
      setComments(prev => ({ ...prev, [postId]: postComments }));
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleLike = async (postId: string) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to like posts",
        variant: "destructive",
      });
      return;
    }

    try {
      const postRef = doc(db, 'blog-posts', postId);
      const post = posts.find(p => p.id === postId);
      const isLiked = post?.likes?.includes(user.uid);

      if (isLiked) {
        await updateDoc(postRef, {
          likes: arrayRemove(user.uid)
        });
      } else {
        await updateDoc(postRef, {
          likes: arrayUnion(user.uid)
        });
      }

      // Update local state
      setPosts(prev => prev.map(p => {
        if (p.id === postId) {
          const newLikes = isLiked 
            ? p.likes?.filter(id => id !== user.uid) || []
            : [...(p.likes || []), user.uid];
          return { ...p, likes: newLikes, likesCount: newLikes.length };
        }
        return p;
      }));

    } catch (error) {
      console.error('Error updating like:', error);
      toast({
        title: "Error",
        description: "Failed to update like",
        variant: "destructive",
      });
    }
  };

  const handleAddComment = async (postId: string) => {
    if (!user || !newComment.trim()) return;

    try {
      await addDoc(collection(db, 'comments'), {
        postId,
        userId: user.uid,
        userEmail: user.email,
        userName: user.displayName || user.email,
        text: newComment.trim(),
        createdAt: new Date()
      });

      setNewComment('');
      fetchComments(postId);
      toast({
        title: "Success",
        description: "Comment added successfully",
      });
    } catch (error) {
      console.error('Error adding comment:', error);
      toast({
        title: "Error",
        description: "Failed to add comment",
        variant: "destructive",
      });
    }
  };

  const handleDeleteComment = async (commentId: string, postId: string) => {
    try {
      await deleteDoc(doc(db, 'comments', commentId));
      fetchComments(postId);
      toast({
        title: "Success",
        description: "Comment deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting comment:', error);
      toast({
        title: "Error",
        description: "Failed to delete comment",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">Loading blog posts...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, tips, and insights from the world of 
            ServiceNow, Salesforce, and Azure development.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No blog posts available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card 
                key={post.id}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-0 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <CalendarDays className="h-4 w-4" />
                    <span>{post.publishedAt.toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 ml-2" />
                    <span>{Math.ceil(post.content.length / 1000)} min read</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {post.author}</span>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLike(post.id)}
                        className={`${post.likes?.includes(user?.uid || '') ? 'text-red-500' : 'text-muted-foreground'}`}
                      >
                        <Heart className={`h-4 w-4 mr-1 ${post.likes?.includes(user?.uid || '') ? 'fill-current' : ''}`} />
                        {post.likesCount || 0}
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedPost(post.id);
                              fetchComments(post.id);
                            }}
                          >
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {comments[post.id]?.length || 0}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{post.title}</DialogTitle>
                          </DialogHeader>
                          
                          <div className="space-y-4">
                            <p className="text-muted-foreground">{post.excerpt}</p>
                            
                            <Separator />
                            
                            <div className="space-y-4">
                              <h4 className="font-semibold">Comments</h4>
                              
                              {user ? (
                                <div className="flex space-x-2">
                                  <Input
                                    placeholder="Add a comment..."
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    onKeyPress={(e) => {
                                      if (e.key === 'Enter') {
                                        handleAddComment(post.id);
                                      }
                                    }}
                                  />
                                  <Button onClick={() => handleAddComment(post.id)} disabled={!newComment.trim()}>
                                    <Send className="h-4 w-4" />
                                  </Button>
                                </div>
                              ) : (
                                <p className="text-muted-foreground text-sm">Please login to add comments</p>
                              )}
                              
                              <div className="space-y-3">
                                {comments[post.id]?.map((comment) => (
                                  <div key={comment.id} className="border rounded-lg p-3">
                                    <div className="flex items-center justify-between mb-2">
                                      <div className="flex items-center space-x-2">
                                        <span className="font-medium text-sm">{comment.userName}</span>
                                        <span className="text-xs text-muted-foreground">
                                          {comment.createdAt.toLocaleDateString()}
                                        </span>
                                      </div>
                                      {user?.uid === comment.userId && (
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          onClick={() => handleDeleteComment(comment.id, post.id)}
                                        >
                                          <Trash2 className="h-4 w-4" />
                                        </Button>
                                      )}
                                    </div>
                                    <p className="text-sm">{comment.text}</p>
                                  </div>
                                ))}
                                
                                {comments[post.id]?.length === 0 && (
                                  <p className="text-center text-muted-foreground text-sm py-4">
                                    No comments yet. Be the first to comment!
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;