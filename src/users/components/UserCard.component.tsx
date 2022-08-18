import React from 'react'
import { Card } from 'react-bootstrap';
import { UserInterface } from '../interfaces/user.interface';
export interface Props {
  user: UserInterface
}

const UserCardComponent: React.FC<Props> = (props: Props) => {
  const { name, email, username } = props.user;
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/avater.png" />
    <Card.Body>
      <Card.Title>{username}</Card.Title>
      <Card.Subtitle>{name}</Card.Subtitle>
      <Card.Text>
        {email}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default UserCardComponent;