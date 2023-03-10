import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Quest({ quest }) {
    return (
        <Card className="my-3 p-3 rounded">
            {/* <Link to={`/quest/${quest._id}`}>
                <Card.Img src={quest.image} />
            </Link> */}

            <Card.Body>
                <Link to={`/quest/${quest._id}`}>
                    <Card.Title as="div">
                        <strong>{quest.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <h6>This should be fun!</h6>
                    </div>
                </Card.Text>


                <Card.Text as="h3">
                    {quest.value}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Quest