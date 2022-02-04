import React from 'react';
import { useRouter } from 'next/router';

const Blog = () =>{
    const router = useRouter();
    const pg = router.query.blog;
    return (
        <div>
            <h1>Welcome to Blog page number {pg}</h1>
        </div>
    )
}
export default Blog;