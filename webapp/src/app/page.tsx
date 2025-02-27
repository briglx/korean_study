import Image from "next/image";
import { HashtagIcon, CheckBadgeIcon, CheckIcon, Square2StackIcon, UserIcon} from '@heroicons/react/24/outline';


export default function Home() {
  return (

    <div className="min-h-screen flex flex-col">

      {/* Heading section */}
      <header className="my-10 flex items-center justify-between mx-12">
          <span className="text-3xl font-bold text-gray-900 ">PACKS</span>
          <span className="text-lg text-gray-500 float-right">1/20</span>
      </header>

      {/* Packs */}
      <div className="flex flex-grow items-center">

        {/* Primary Pack */}
        <div className="bg-green-700 text-white flex flex-col p-8 flex-grow  p-8  shadow-xl rounded-lg mx-12 h-[70vh]">

          <h2 className="text-4xl font-bold py-4 mb-4">Common Words</h2>

          <p className="flex items-center my-2">
            <span className="mr-2">
              <CheckBadgeIcon className="h-5 w-5" />
            </span>
            EASY
          </p>

          <p className="flex items-center my-2">
            <span className="mr-2">
              <HashtagIcon className="h-5 w-5" />
            </span>
            25 WORDS
          </p>

          <div className="mt-auto flex  justify-between">

            <div className="text-center">
                <p className="text-5xl font-bold">22</p>
                <p className="text-sm text-gray-300">LEARNING WORDS</p>
            </div>
            <div className="text-center">
                <p className="text-5xl font-bold">3</p>
                <p className="text-sm text-gray-300">MASTERED WORDS</p>
            </div>
            <div className="text-center">
              <p className="flex justify-center">
                <CheckIcon className="h-12 w-12" />
              </p>
              <p className="text-sm text-gray-300">TEST AVAILABLE</p>
            </div>
          </div>




        </div>

        {/* Extra Pack */}
        <div className="fixed right-0 h-[60vh] bg-gray-300 w-[20px] rounded-l-lg shadow-sm">
          {/* Placeholder for another pack */}
        </div>
      </div>

      <footer className="mt-auto flex justify-between font-bold text-gray-400  mt-12 p-8 pt-16">

        <div className="flex items-center text-orange-600 ">
          <Square2StackIcon className="h-10 w-10" />
          PACKS
        </div>

        <div className="flex items-center">
          <UserIcon className="h-10 w-10" />
          YOU</div>
      </footer>


    </div>

  );
}

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
//         <h1 className="text-3xl font-bold">
//           Packs
//         </h1>

//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
