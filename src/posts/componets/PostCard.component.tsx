import React from 'react'
import { Card } from 'react-bootstrap';
import { PostInterface } from '../interfaces/posts.interface'
export interface Props {
    post: PostInterface;
}

export default function PostCardComponent(props: Props) {
    const { title, body } = props.post;
    return (
        <Card className='p-2'>
            <Card.Title>{title}</Card.Title>
            <Card.Body>{body}</Card.Body>
        </Card>
    )
}
