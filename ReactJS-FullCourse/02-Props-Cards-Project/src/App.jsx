import Card from "./components/Card"

const App = () => {
  return (
    <div>
      <div className="cards">
        <Card 
          user='Sumit Nema' 
          age={26} 
          bio='Tech evangelist & web developer; passionate about mentoring and open-source projects.' 
          img='https://images.unsplash.com/photo-1729292486436-b0763866b61f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870'
        />

        <Card 
          user='Baran Lotfollahi' 
          age={29} 
          bio='UX/UI designer blending aesthetics with accessibility; coffee lover & urban sketch artist.' 
          img='https://images.unsplash.com/photo-1598082939481-7cd00e2b9618?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=386'
        />

        <Card 
          user='Dammer Ban' 
          age={19} 
          bio='College student & coding hobbyist; learning full-stack web development and indie game design.' 
          img='https://i.pinimg.com/1200x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg'
        />

        <Card 
          user='Manushi Chillar' 
          age={25} 
          bio='Former Miss World 2017; actor & entrepreneur; advocate for women’s health and sustainability.' 
          img='https://imgs.search.brave.com/MaDc2HVhAFS_l1prswp68lE1GOlgo0hwvQgNB-V7u74/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNi5i/ZWhpbmR3b29kcy5j/b20vaGluZGktYWN0/cmVzcy9tYW51c2hp/LWNoaGlsbGFyL3Ro/dW1ibmFpbHMvbWFu/dXNoaS1jaGhpbGxh/ci1zdGlsbHMtcGhv/dG9zLXBpY3R1cmVz/LTE5LmpwZw'
        />

        <Card 
          user='Akihiko' 
          age={24} 
          bio='Travel photographer capturing landscapes & cityscapes; storyteller chasing golden hour light.' 
          img='https://imgs.search.brave.com/QfZ1wBRPgjowEgkYDydU_2ZCV3SsCrexMpJkIwT0YK0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQx/ODI0MDkyL3Bob3Rv/L2dldHRpbmctc29t/ZS1mcmVzaC1haXIu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVhrMFoxU0VXYTZ3/VE5IeTFETkRVOGhi/RzdXNzhGWHhCU0c1/XzE4b1A0eG89'
        />

        <Card 
          user='Rhea Chakraborty' 
          age={38} 
          bio='Actor & activist; committed to mental health awareness and youth empowerment.' 
          img='https://imgs.search.brave.com/ITSKQi5mqq7aW25Pi6nPlL19nIJJlJ-Ykkk9V__h_eo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDEu/cGhvdG9nYWxsZXJ5/LmluZC5zaC93cC1j/b250ZW50L3VwbG9h/ZHMvaW5kaWFjb20v/cmhlYS1jaGFrcmFi/b3J0eS1zcGlsbGlu/Zy1ob3RuZXNzLWlu/LXRoaXMtcGljdHVy/ZS0yMDE3MDUtMTQ5/NTQ1MTYyNS5qcGc_/aW1wb2xpY3k9TWVk/aXVtX1dpZHRob25s/eSZ3PTcwMA'
        />

        <Card 
          user='Lily Bloom' 
          age={22} 
          bio='Cat lover & cupcake enthusiast; always smiling and spreading good vibes.' 
          img='https://imgs.search.brave.com/gJVnUfcaN4VOFKI7UvVmkZD66ILhaQrvXFzJXiFGtWI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UbGtOR1k1/WkdFdFltVXdNeTAw/WldVd0xXRXlZalV0/WXpNeVpqRTBaRFZp/TkRkalhrRXlYa0Zx/Y0djQC5qcGc'
        />

        <Card 
          user='Tommy Spark' 
          age={24} 
          bio='Dog lover & amateur magician; curious, playful, and loves making people laugh.' 
          img='https://imgs.search.brave.com/RHdtGzJor-R8WIwV7tDG0ktkg8uNmLSwzFVuq6EKx34/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzI3LzQ4LzQ4/LzM2MF9GXzExMjc0/ODQ4MjRfeFZOa2hs/dDNGUko3S1ZTTENX/eExsU0V2YnFwRUJL/VVYuanBn'
        />
      </div>
    </div>
  )
}

export default App