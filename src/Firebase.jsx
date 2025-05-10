import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsewOxFJmxXZBDLTcokglxGFf5PkeAMS4",
    authDomain: "torquehuq.firebaseapp.com",
    projectId: "torquehuq",
    storageBucket: "torquehuq.firebasestorage.app",
    messagingSenderId: "457502716608",
    appId: "1:457502716608:web:dc1f5de44e4e80f23db325"
    };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addToCart = async (cartItem) => {
  try {
    await addDoc(collection(db, 'cart'), cartItem);
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

export const getCartItems = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'cart'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching cart items:', error);
    return [];
  }
};

export const removeFromCart = async (itemId) => {
  try {
    await deleteDoc(doc(db, 'cart', itemId));
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
};

export default db;