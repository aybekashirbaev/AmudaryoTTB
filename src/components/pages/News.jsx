import React, { useEffect, useState } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import client from '../../client';

const News = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        client.fetch(
            `*[_type == "post"]{
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
        ).then((data) => setPosts(data)).catch(console.error)
    }, [])

    return (
        <section id="news">
            <h1>Yangiliklar</h1>
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.slug.current}>
                        <img src={post.mainImage.asset.url} alt="" />
                        <div className="texts">
                            <h4>{post.title}</h4>
                            <BlockContent blocks={post.body} projectId="3pawvs27" datset='production' />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default News;