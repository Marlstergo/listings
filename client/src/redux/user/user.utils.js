// import { getCurrentUser, firestore } from "../../fire-base/fire-base"

// export const removeContact =  (contacts, contactItem) => {
//     const newContactList = contacts.filter(contact => contact.name !== contactItem)
    
//     const Update = async () =>{
//         const userAuth = await getCurrentUser()
//         const userRefrence = firestore.doc(`users/${userAuth.uid}`)
//         await userRefrence.update({
//             contacts: newContactList
//         })
        
//     }
//     Update()
//     // return contacts.filter(contact => contact.name !== contactItem)
    

//     return newContactList
// }

// export const editContact =  (contacts, details) => {
//     const newContactList = contacts.map(
//         contact => {
//             if (contact.name === details.contact){
//                 if (details.editedcontactDetails.newName !== '' ){    
//                     contact.name = details.editedcontactDetails.newName
//                 }else{
//                     return contact
//                 }
//                 if (details.editedcontactDetails.newNumber === '' ){    
//                     return contact
//                 }
//                 contact.number = details.editedcontactDetails.newNumber
//                 if (details.editedcontactDetails.newEmail === '' ){    
//                     return contact
//                 }else{
//                     contact.email = details.editedcontactDetails.newEmail
//                 }
//             }
//             return contact
//         }
//     )
//     const Update = async () =>{
//         const userAuth = await getCurrentUser()
//         const userRefrence = firestore.doc(`users/${userAuth.uid}`)
//         await userRefrence.update({
//             contacts: newContactList

//         })
//         console.log('updated contacts')
        
//     }
//     Update()

//     return newContactList
// }