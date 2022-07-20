import TypeWriterEffect from 'react-typewriter-effect';


export default function banking(){


    return <>
    <h1>Welcome</h1>
    <div class='typewriter'>
    <TypeWriterEffect 
        
        textStyle={{
          fontFamily: 'Amatic SC', 
          color: 'rgb(212, 195, 118)',
          fontWeight: 500,
          textalign: 'left',
          fontSize: '2em',
        }}
        startDelay={2000}
        cursorColor="rgb(35, 87, 68)"
        multiText={[
          'The world is merciless, and its also very beautiful.',
          'You cant change anything unless you can discard part of yourself too.',
          'To surpass monsters, you must be willing to abandon your humanity'
          
        
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
     <div>
      

      </div>
      </div>
      {/* <div class="gif">
     <img id="bank"src="https://media1.giphy.com/media/izzMoXx7sWs7HN29Hl/source.gif " alt="img"/>  
    </div> */}
    
  
 
    </>
}