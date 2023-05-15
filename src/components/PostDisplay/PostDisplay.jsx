import React from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import PostCard from "../PostCard/PostCard";
import Loader from "../Loader/Loader";

export default function PostDisplay({
    posts,
    numPhotosCol,
    isProfile,
    loading,
    addLike,
    removeLike,
    loggedUser, 
    removePost
}) {
  if (loading) {
    return (
      <>
        <Segment>
          <Dimmer active inverted>
            <Loader size="small">Loading</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
        <Card.Group itemsPerRow={numPhotosCol} stackable>
          {posts.map((post) => {
            return (
              <PostCard post={post} key={post._id} isProfile={isProfile} addLike={addLike} removeLike={removeLike} loggedUser={loggedUser}  />
            );
          })}
        </Card.Group>
      </>
    );
  }

  return (

    <div>
      {posts.map((post) => {
        // console.log('from post display')
        return <PostCard post={post} key={post._id} isProfile={isProfile} addLike={addLike} removeLike={removeLike}loggedUser={loggedUser}  />;
      })}
      </div>

  );
}
