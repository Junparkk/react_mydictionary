// word.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
const UPDATE = "word/UPDATE";
const REMOVE = "word/REMOVE";

const initialState = {
  list: [
    { word: "Apple", meaning: "사과", example: "I like an apple" },
    { word: "banana", meaning: "바나나", example: "I like a banana " },
  ],
};

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

export function createWord(word) {
  return { type: CREATE, word: word };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}
//middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "mydict"));
    console.log(word_data);

    let word_list = [];

    word_data.forEach((doc) => {
      console.log(doc.data(), "check");
      word_list.push({ id: doc.id, ...doc.data() });
    });

    dispatch(loadWord(word_list));
  };
};

export const addWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "mydict"), word);
    console.log(docRef);
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return { list: action.word_list };
    }
    case "word/CREATE": {
      const new_word_list = [...state.list, action.word];
      return { list: new_word_list };
    }
    default:
      return state;
  }
}
