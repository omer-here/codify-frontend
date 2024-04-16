/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import Accordian from "./Accordian";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { revalidatePath } from "next/cache";
import { gql } from "@apollo/client";

export default function ForumLanding() {
  const [gotquestions, setQuestions] = useState([]);
  const [postQState, setPostQState] = useState(false);
  const [deleteQState, setDeleteQState] = useState(false);
  const [postAState, setPostAState] = useState(false);

  const handlePostQState = () => {
    postQState === false ? setPostQState(true) : setPostQState(false);
    // other states
    deleteQState === true ? setDeleteQState(false) : null;
    postAState === true ? setPostAState(false) : null;
  };

  const handleDeleteQState = () => {
    deleteQState === false ? setDeleteQState(true) : setDeleteQState(false);
    // other states
    postAState === true ? setPostAState(false) : null;
    postQState === true ? setPostQState(false) : null;
  };

  const handlePostAState = () => {
    postAState === false ? setPostAState(true) : setPostAState(false);
    // other states
    postQState === true ? setPostQState(false) : null;
    deleteQState === true ? setDeleteQState(false) : null;
  };

  //declaring & initializing Apolloclient
  const client = new ApolloClient({
    uri: "http://127.0.0.1:1337/graphql",
    cache: new InMemoryCache(),
  });

  //creating Question queries
  const createForumQuestion = gql`
    mutation createQuestion(
      $title: String!
      $desc: String
      $author: String!
      $answer: String
      $pub: DateTime
    ) {
      createForumQuestion(
        data: {
          title: $title
          description: $desc
          author: $author
          answer: $answer
          publishedAt: $pub
        }
      ) {
        data {
          id
          attributes {
            title
            description
            author
            answer
          }
        }
      }
    }
  `;

  const updateForumQuestion = gql`
    mutation updateQuestion($sid: ID!, $answer: String, $QID: Int) {
      updateForumQuestion(id: $sid, data: { answer: $answer, QID: $QID }) {
        data {
          id
          attributes {
            title
            description
            author
            answer
            QID
          }
        }
      }
    }
  `;

  const deleteForumQuestion = gql`
    mutation deleteForumQuestion($sid: ID!) {
      deleteForumQuestion(id: $sid) {
        data {
          id
          attributes {
            title
            description
            author
          }
        }
      }
    }
  `;

  const getAllForumQuestion = gql`
    query GetAllQuestions {
      forumQuestions(sort: "id") {
        data {
          id
          attributes {
            title
            description
            author
            answer
          }
        }
      }
    }
  `;

  //creating Question handlers
  async function PostForumQuestion() {
    try {
      const { data } = await client.mutate({
        mutation: createForumQuestion,
        variables: {
          title: PostQformData.title,
          desc: PostQformData.description,
          author: "testUser",
          answer: "We'll Find",
          pub: "2024-04-03T00:00:00Z",
        },
      });
      alert("Question Posted");
      console.log("New Question Posted:", data.createForumQuestion.data.id);
    } catch (error) {
      alert(error);
      //console.log(error)
    }

    //   revalidatePath("/python-programs", "page");

    //   return {
    //     question: {
    //       details: data.createForumQuestion.data,
    //     },
    //   };
  }

  async function PostForumAnswer() {
    try {
      const { data } = await client.mutate({
        mutation: updateForumQuestion,
        variables: {
          sid: PostAformData.QID,
          QID: Number(PostAformData.QID),
          answer: PostAformData.answer,
        },
      });
      console.log("Answered:", data.updateForumQuestion.data.id);
    } catch (error) {
      alert(error);
      //console.log(error)
    }

    //   revalidatePath("/python-programs", "page");

    //   return {
    //     question: {
    //       details: data.createForumQuestion.data,
    //     },
    //   };
  }

  async function DeleteForumQuestion() {
    try {
      const { data } = await client.mutate({
        mutation: deleteForumQuestion,
        variables: {
          sid: DeleteQformData.id,
        },
      });

      console.log("Question Deleted", data.deleteForumQuestion.data.id);
    } catch (error) {
      alert(error);
      //console.log(error)
    }

    //   revalidatePath("/python-programs", "page");

    //   return {
    //     question: {
    //       details: data.createForumQuestion.data,
    //     },
    //   };
  }

  async function GetAllForumQuestions() {
    try {
      const { data } = await client.query({
        query: getAllForumQuestion,
      });

      //console.log("All Questions", data.forumQuestions.data);
      return {
        questions: {
          details: data.forumQuestions.data,
        },
      };
    } catch (error) {
      alert(error);
      //console.log(error)
      return;
    }

    //   revalidatePath("/python-programs", "page");
    const attr = await data.forumQuestions.data.attributes;
  }

  //////////////////////////creating Answers queries///////////////////////////
  const createForumAnswer = gql`
    mutation createAnswer(
      $QID: Int
      $ans: String
      $author: String!
      $pub: DateTime
    ) {
      createForumAnswer(
        data: { QID: $QID, answer: $ans, author: $author, publishedAt: $pub }
      ) {
        data {
          id
          attributes {
            QID
            answer
            author
          }
        }
      }
    }
  `;
  const deleteForumAnswer = gql`
    mutation deleteAnswer($sid: ID!) {
      deleteForumAnswer(id: $sid) {
        data {
          id
          attributes {
            QID
            answer
            author
          }
        }
      }
    }
  `;
  const getAllForumAnswers = gql`
    query GetAllAnswers {
      forumAnswers(sort: "id") {
        data {
          id
          attributes {
            QID
            answer
            author
          }
        }
      }
    }
  `;

  //creating Answers Handlers
  async function PostForumAnswer2() {
    try {
      const { data } = await client.mutate({
        mutation: createForumAnswer,
        variables: {
          QID: 6,
          ans: "tesing via UI query",
          author: "testUser",
          pub: "2024-04-01T00:00:00Z",
        },
      });

      console.log("New Answer Posted:", data.createForumAnswer.data.id);
    } catch (error) {
      alert(error);
      //console.log(error)
    }

    //   revalidatePath("/python-programs", "page");

    //   return {
    //     question: {
    //       details: data.createForumQuestion.data,
    //     },
    //   };
  }

  async function DeleteForumAnswer() {
    try {
      const { data } = await client.mutate({
        mutation: deleteForumAnswer,
        variables: {
          sid: 10,
        },
      });

      console.log("Answer Deleted", data.deleteForumAnswer.data.id);
    } catch (error) {
      alert(error);
      //console.log(error)
    }

    //   revalidatePath("/python-programs", "page");

    //   return {
    //     question: {
    //       details: data.createForumQuestion.data,
    //     },
    //   };
  }
  async function GetAllForumAnswers() {
    try {
      const { data } = await client.query({
        query: getAllForumAnswers,
      });

      //console.log("All Questions", data.forumAnswers.data);

      return {
        answers: {
          details: data.forumAnswers.data,
        },
      };
    } catch (error) {
      alert(error);
      //console.log(error)
      return;
    }

    //   revalidatePath("/python-programs", "page");
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { questions } = await GetAllForumQuestions();
        // const { answers } = await GetAllForumAnswers();
        const responseQ = await questions.details;
        // const responceA = await answers.details;
        setQuestions(responseQ);
        // setAnswers(responceA);
        // console.log(gotquestions);
        console.log(responseQ);
        // console.log(responceA)
        // console.log(gotquestions)
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuestions();
  }, []);

  const [PostQformData, setPostQFormData] = useState({
    title: "",
    description: "",
  });

  const handlePostQChange = (event) => {
    const { name, value } = event.target;
    setPostQFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const [DeleteQformData, setDeleteQFormData] = useState({
    id: "",
  });

  const handleDeleteQChange = (event) => {
    const { name, value } = event.target;
    setDeleteQFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const [PostAformData, setPostAFormData] = useState({
    QID: "",
    answer: "",
  });

  const handlePostAChange = (event) => {
    const { name, value } = event.target;
    setPostAFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  if (gotquestions) {
    return (
      <>
        <div className="flex flex-col justify-center items-center mt-4">
          <h1 className="text-2xl">
            <strong>Codify&apos;s Forum</strong>
          </h1>

          <div className=" flex flex-col justify-center items-center mt-4 ">
            {gotquestions.map((question) => {
              return (
                <>
                  <Accordian
                    key={question.id}
                    qTitle={question.attributes.title}
                    qID={question.id}
                    answer={question.attributes.answer}
                  />
                </>
              );
            })}
          </div>
          {/* ALL TESTING BUTTONS*/}
          <div className="mt-4">
            <button
              className="inline-flex text-white bg-indigo-600 border-2 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg mr-4 mt-4"
              onClick={handlePostQState}
            >
              Post A Question
            </button>
            <button
              className="inline-flex text-white bg-indigo-600 border-2 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg mr-4 mt-4"
              onClick={handleDeleteQState}
            >
              Delete A Question
            </button>
            <button
              className="inline-flex text-white bg-indigo-600 border-2 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg mr-4 mt-4"
              onClick={handlePostAState}
            >
              Post A Answer
            </button>
          </div>

          {/* Accordian testing */}
          {/* <Accordian  qTitle="Do you prefer Android or iOS"
        answer="I like to use iOS products" qID="123" /> */}

          {/* Post A Question Form */}
          {postQState === true ? (
            <form className="mt-4 w-1/2" onSubmit={PostForumQuestion}>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-50"
              >
                Title:
                <input
                  type="text"
                  name="title"
                  required
                  value={PostQformData.title}
                  onChange={handlePostQChange}
                  className="block w-full rounded-md border-0 p-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </label>
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-50"
              >
                Description:
                <textarea
                  type="text"
                  name="description"
                  value={PostQformData.description}
                  onChange={handlePostQChange}
                  className="block w-full rounded-md border-0 p-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </label>
              <input
                type="submit"
                value="Submit"
                className="flex w-full mt-4 justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />
            </form>
          ) : null}

          {/* Delete A Question Form */}
          {deleteQState === true ? (
            <form className="mt-4 w-1/2" onSubmit={DeleteForumQuestion}>
              <label
                htmlFor="id"
                className="block text-sm font-medium leading-6 text-gray-50"
              >
                ID:
                <input
                  type="number"
                  name="id"
                  required
                  value={DeleteQformData.id}
                  onChange={handleDeleteQChange}
                  className="block w-full rounded-md border-0 p-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </label>

              <input
                type="submit"
                value="Submit"
                className="flex w-full mt-4 justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />
            </form>
          ) : null}

          {/* Post A Answer Form */}
          {postAState === true ? (
            <form className="mt-4 w-1/2" onSubmit={PostForumAnswer}>
              <label
                htmlFor="answer"
                className="block text-sm font-medium leading-6 text-gray-50"
              >
                Answer:
                <textarea
                  type="text"
                  name="answer"
                  required
                  value={PostAformData.answer}
                  onChange={handlePostAChange}
                  className="block w-full rounded-md border-0 p-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </label>
              <label
                htmlFor="QID"
                className="block text-sm font-medium leading-6 text-gray-50"
              >
                QID:
                <input
                  type="number"
                  name="QID"
                  required
                  value={PostAformData.id}
                  onChange={handlePostAChange}
                  className="block w-full rounded-md border-0 p-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </label>
              <input
                type="submit"
                value="Submit"
                className="flex w-full mt-4 justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />
            </form>
          ) : null}
        </div>
      </>
    );
  }
}
