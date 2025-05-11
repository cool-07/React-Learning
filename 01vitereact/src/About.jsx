
function About(){
    //we can declare or define the js outside the return expression in react and anywhere in whole app.jsx, and only the final evaluated js expression can be used in return for ex.
    const UserName = "John";
    const button=document.querySelector('#button');
    button.addEventListener('click',function(){
        alert("username is "+UserName)
    })
    return(
        
        <>
        <h2>Ritesh is a good man</h2>
        <button id="button">{button}</button>
        <img src="https://liquipedia.net/commons/images/a/ac/KRU_Esports_full_darkmode.png" alt="no image" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis sequi ut voluptas nemo eum. Laboriosam dicta eveniet at! Officiis?</p>
        {UserName}
        </>
    )
}
export default About