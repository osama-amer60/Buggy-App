import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => {

    return{
      showList: true ,
      usersList: localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users")|| '')
        : Array() as user[] | null,
        updatedUser:null ,
        indexUpdatedUser:-1 as number,
    }
  },
  actions: {
    updateShowList() {
      this.showList = this.showList ? false : true;
    },
    addUser(user:object) {
      this.usersList.push(user)
      localStorage.setItem('users',JSON.stringify(this.usersList))
    },
    deleteUser(index:number){
      this.usersList.splice(index,1)
      localStorage.setItem('users',JSON.stringify(this.usersList))
    },
    updateUser(index:number){
      this.updatedUser = this.usersList[index]
      this.indexUpdatedUser = index    
      this.showList= false  
      
    },
    displayUpdatedUser(formData:object){
      this.usersList.splice(this.indexUpdatedUser, 1, formData);
      localStorage.setItem('users',JSON.stringify(this.usersList))
      this.updatedUser = null;
      // this.usersList[this.indexUpdatedUser] = formData    
    },
  },
});

interface user {
  firstName: string;
  lastName: string;
  age?: number | null;
  email: string;
  bio: string;
  image: string;
}