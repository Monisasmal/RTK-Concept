
import './App.css'

function App() {
 const data = [
  {
    title: 'Basics',
    qa: [
      {
        q: 'What is Redux Toolkit (RTK)?',
        a: 'Redux Toolkit is the official, recommended way to write Redux logic with less boilerplate and better defaults.',
        example: 'Like using Google Maps instead of reading a paper map — same destination, easier journey.'
      },
      {
        q: 'Is RTK different from Redux?',
        a: 'No. RTK is Redux itself, just written in a modern and simplified way.'
      },
      {
        q: 'Why was RTK introduced?',
        a: 'To reduce boilerplate, simplify store setup, handle immutability safely, and improve developer experience.'
      },
    ],
  },

  {
    title: 'Store & configureStore',
    qa:[
      {
        q: 'What is a Redux store?',
        a: 'The store is the single source of truth that holds the entire application state.',
        example: 'A central bank that stores all money information of a country.'
      },
      {
        q: 'What does configureStore do?',
        a: 'It creates the Redux store with built-in DevTools, middleware, and reducer setup.',
        example: ' Setting up a company headquarters with security, rules, and departments already configured.'
      },
      {
        q: 'Why only one store?',
        a: 'Redux follows the Single Source of Truth principle.'
      },
    ]
  },

  {
    title: 'Slice, Reducer & Actions',
    qa: [
      {
        q: 'What is a slice?',
        a: 'A slice is a feature-based unit containing state, reducers, and actions.',
        example: ' A department in a company (HR, Finance, IT).'
      },
      {
        q: 'What does createSlice do?',
        a: 'It automatically generates reducers and action creators.',
        example: ' A machine that both prints forms and processes them.'
      },
      {
        q: 'What is initialState?',
        a: 'initialState defines the default state when the app loads.',
        example: ' A new bank account with ₹0 balance.'
        
      },
      {
        q: 'What is a reducer?',
        a: 'A reducer is a function that updates state based on actions.',
        example:' A bank cashier who updates balance after deposit or withdrawal.'
      },
      {
        q: 'What is an action?',
        a: 'An action describes what happened in the application.',
        example: ' A deposit slip given to the bank.'
      },
      {
        q: 'What is payload?',
        a: 'Payload is the data sent along with an action.',
        example:' The amount written on the deposit slip.'
      },
      {
        q: 'What is Middleware?',
        a: 'Code that runs between dispatch and reducer.',
        example: ' A security check before entering an airport.'
      },
      {
        q: 'What is State ?',
        a: 'Data stored in Redux.',
        example: ' Your bank balance — current condition of your account.'
      },
      {
        q: 'What is Dispatch ?',
        a: 'Sending an action to the store.',
        example: ' Submitting your deposit slip to the cashier.'
      },
    ],
  },

  {
    title: 'React Redux Hooks',
    qa: [
      {
        q: 'What is useDispatch?',
        a: 'useDispatch is used to send actions to the Redux store.',
        example: ' A button that sends your request to the system.'
      },
      {
        q: 'What is useSelector?',
        a: 'useSelector is used to read data from the Redux store.',
        example: ' Checking your bank balance from ATM.'
      },
      {
        q: 'What is Provider?',
        a: 'Provider makes the Redux store available to all React components.'
      },
    ],
  },

  {
    title: 'Immutability & Immer',
    qa: [
      {
        q: 'Can we mutate state in RTK?',
        a: 'Yes. RTK uses Immer, which safely handles immutability internally.'
      },
      {
        q: 'What is Immer?',
        a: 'Immer converts mutable-looking code into immutable updates.',
        answer: 'A translator converting your simple language into official legal language.'
      },
    ],
  },

  {
    title: 'Async & Thunk',
    qa: [
      {
        q: 'What is Redux Thunk?',
        a: 'Thunk allows writing asynchronous logic like API calls.',
        example: ' Ordering food → waiting → receiving food.'
      },
      {
        q: 'What is createAsyncThunk?',
        a: 'It simplifies async logic by generating pending, fulfilled, and rejected actions.',
        example: ' Pending : Order Placed , Fulfilled → Delivered, Rejected → Cancelled'
      },
      {
        q: 'What are thunk states?',
        a: 'pending, fulfilled, rejected.'
      },
    ],
  },

  {
    title: 'RTK Query',
    qa: [
      {
        q: 'What is RTK Query?',
        a: 'RTK Query is a data-fetching and caching solution built into RTK.',
        example: ' A smart assistant that remembers previous answers so you don’t ask again.'
      },
      {
        q: 'Why use RTK Query?',
        a: 'It removes manual API logic, loading state, and caching.'
      },
    ],
  },

  {
    title: 'Architecture & Best Practices',
    qa: [
      {
        q: 'What is feature-based architecture?',
        a: 'Organizing Redux logic by features instead of file types.'
      },
      {
        q: 'What is unidirectional data flow?',
        a: 'Data flows in one direction: UI → Action → Reducer → Store → UI.'
      },
    {
      q: 'What is extraReducers ?',
      a: 'Handles actions not defined inside the slice',
      example:' Handling external requests from another department.'
    },
    {
      q: 'What is Normalized State?',
      a: 'Storing data in a structured, non-duplicated way.',
      example: ' A phone contact list stored alphabetically, not repeated.'
    },
    {
      q: 'What is Feature-Based Structure?',
      a: 'Organizing Redux code by features, not file types.',
      example: ' Organizing a hospital by departments, not by job roles.'
    },
    ],
  },

  {
    title: 'Interview Comparisons',
    qa: [
      {
        q: 'Redux vs RTK?',
        a: 'RTK reduces boilerplate and enforces best practices while keeping Redux concepts.'
      },
      {
        q: 'RTK vs Context API?',
        a: 'Context is for small apps; RTK is better for complex global state.'
      },
      {
       q: 'What is Redux DevTools?',
       a: 'Browser tool to inspect Redux state & actions.',
       example: ' CCTV camera for your app’s data flow.'
      },
    ],
  },
 ]


  return (
    <>
      <div className='app'>
        <h1>Redux Toolkit (RTK) – Interview Q&A</h1>
        <p className='subtitle'>learning, revision & publishing</p>
        {data.map((section,index) =>(
          <div className="section" key={index}>
         <h2>{section.title}</h2>
         {section.qa.map((item, i) => (
          <div className="card" key={i}>
            <p className="question">Q. {item.q}</p>
              <p className="answer">👉 {item.a}</p>
              {item.example && (
                <p className="example">
                  <strong>Real World Example:</strong>{item.example}
                </p>
              )}
          </div>
         ))}
        </div>
      ))}
      </div>

    </>
  )
}

export default App
