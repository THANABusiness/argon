const profile = document.getElementById('profile');
profile.innerHTML = `
        <main class="p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
          <div class="text-center">
            <div class="h-20 w-20 rounded-full overflow-hidden ring ring-slate-300 mx-auto">
              <img src="https://i.ibb.co/JxhqNrG/Avengers-2010-Early-Quinjet-Design-Phil-Saunders.jpg" alt="name" class="h-full w-full object-cover">
            </div>
               <p class="text-sm mt-2 text-slate-600">My Account</p>
            <h1 class="text-2xl font-bold mt-4 text-slate-800">My Balance </h1>
            
    <h1>{{ 'customer.account.title' | t }}</h1>
         
          </div>
          
        </main>
      
 
    
  
  
`;
