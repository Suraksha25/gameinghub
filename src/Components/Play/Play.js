import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import './Play.css'
function Play() {
    const navigate = useNavigate()

  const gotToNewPage1=()=>{
    navigate("/maze");
  }
  const gotToNewPage2=()=>{
    navigate("/connectfour");
  }
  const gotToNewPage3=()=>{
    navigate("/tictac");
  }
  const gotToNewPage4=()=>{
    navigate("/memorymatch");
  }
  return (
    <div className='play'>
        <div className='container'>
            <div class="row row-cols-md-2">
                <div class="col-md-6">
                <Card className='bg-dark' style={{color:'white',margin:'30px'}}>
                <img src='https://pinnguaq.com/wp-content/uploads/2020/04/scratch-green-maze.jpg' style={{width:'100%',height:'400px'}}/>
                <Card.Body>
                    <Card.Title>Maze Game</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                    <Button variant="light" onClick={() => gotToNewPage1()}>Go</Button>
                </Card.Body>
                </Card>
                </div>
                <div class="col-md-6">
                <Card className='bg-dark' style={{color:'white',margin:'30px'}}>
                <img src='https://www.figma.com/community/snapshot?resource_id=1030568602955576031&resource_type=widget' style={{width:'100%',height:'400px'}}/>
                <Card.Body>
                    <Card.Title>Connect Four</Card.Title>
                    <Card.Text>
                   
                    </Card.Text>
                    <Button variant="primary" onClick={() => gotToNewPage2()}>Go</Button>
                </Card.Body>
                </Card>
                </div>
            </div>
            <div class="row row-cols-md-1">
                <div class="col-md-6">
                <Card className='bg-dark' style={{color:'white',margin:'30px'}}>
                <img src='https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU=w240-h480-rw' style={{width:'100%',height:'400px'}}/>
                <Card.Body>
                    <Card.Title>Tic Tac Toe</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                    <Button variant="primary" onClick={() => gotToNewPage3()}>Go</Button>
                </Card.Body>
                </Card>
                </div>
                <div class="col-md-6">
                <Card className='bg-dark' style={{color:'white',margin:'30px'}}>
                <img src='https://store-images.s-microsoft.com/image/apps.39658.13748070934816609.a1123cd6-3b94-44ef-932f-4e977c3b824d.8c997a33-e61c-42bd-a117-4413310fa36f?mode=scale&q=90&h=300&w=300' style={{width:'100%',height:'400px'}}/>
                <Card.Body>
                    <Card.Title>Memory Matching</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                    <Button variant="primary" onClick={() => gotToNewPage4()}>Go</Button>
                </Card.Body>
                </Card>
                </div>
            </div>
            
          </div>
    </div>
  )
}

export default Play