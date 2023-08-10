 import{db,storage} from "./firebase.mjs"

import { collection,  getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { ref, getDownloadURL  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";


//////////////////////////////     ////////////////////////////////////////////////////////////////


////////////////////////////  ye code firestore se value la kr dy ga  ///////////////////////////////////


const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  
  
getDownloadURL(ref(storage, doc.id))
  .then((url) => {
      
   let link=url

   document.getElementById("card").innerHTML+=`
   
  <div class="card" style="width: 18rem;">
   <img class="card-img-top" src="${link}" alt="Card image cap">
   <div class="card-body">
   <h5 class="card-text na">${doc.data().Name}</h5>
   <h5 class="card-title"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h5>
   <h5 class="card-text">RS : ${doc.data().Price}</h5>
   <button id="bb">Add to bag</button>
   </div>
 </div>
`  
  })


  .catch((error) => {
    // Handle any errors
  });
 
})