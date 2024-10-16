export function ActionButton() {
  return (
    <>
      <div className="flex justify-around bg-transparent p-4">
        <button className="flex flex-col items-center text-white">
          <svg
            className="h-6 w-6 mb-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 2C10.9 2 10 2.9 10 4C10 4.74 10.4 5.39 11 5.72V7H7V5.72C7.6 5.39 8 4.74 8 4C8 2.9 7.1 2 6 2C4.9 2 4 2.9 4 4C4 4.74 4.4 5.39 5 5.72V7H4C2.9 7 2 7.9 2 9V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9C22 7.9 21.1 7 20 7H19V5.72C19.6 5.39 20 4.74 20 4C20 2.9 19.1 2 18 2C16.9 2 16 2.9 16 4C16 4.74 16.4 5.39 17 5.72V7H13V5.72C13.6 5.39 14 4.74 14 4C14 2.9 13.1 2 12 2M4 9H7V17H4V9M17 9V17H20V9H17M11 9H13V17H11V9M8 9H10V17H8V9M14 9H16V17H14V9M4 18H7V20H4V18M17 18H20V20H17V18M8 18H16V20H8V18Z" />
          </svg>
          Tukar Poin
        </button>
        <button className="flex flex-col items-center text-white">
          <svg
            className="h-6 w-6 mb-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M10 2C8.9 2 8 2.9 8 4C8 4.74 8.4 5.39 9 5.72V7H4C2.9 7 2 7.9 2 9V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9C22 7.9 21.1 7 20 7H15V5.72C15.6 5.39 16 4.74 16 4C16 2.9 15.1 2 14 2C12.9 2 12 2.9 12 4C12 4.74 12.4 5.39 13 5.72V7H11V5.72C11.6 5.39 12 4.74 12 4C12 2.9 11.1 2 10 2ZM4 9H11V13H4V9ZM4 15H11V17H4V15ZM13 15H20V17H13V15ZM13 9H20V13H13V9ZM10 20H14V18H10V20ZM15.59 4.58L18 7H13V4C13 3.45 13.45 3 14 3C14.55 3 15 3.45 15.59 4.58ZM8 4C8 3.45 8.45 3 9 3C9.55 3 10 3.45 10.59 4.58L9.17 6H6V4C6 3.45 6.45 3 7 3C7.55 3 8 3.45 8 4Z" />
          </svg>
          Referral
        </button>
        <button className="flex flex-col items-center text-white">
          <svg
            className="h-6 w-6 mb-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 1C6.48 1 2 5.48 2 11H0L4 15L8 11H6C6 6.58 9.05 3 12 3C14.95 3 18 6.05 18 9C18 12.05 14.95 15 12 15V11H10V19H12C17.52 19 22 14.52 22 9C22 3.48 17.52 1 12 1ZM12 17C8.69 17 6 14.31 6 11C6 7.69 8.69 5 12 5C15.31 5 18 7.69 18 11C18 14.31 15.31 17 12 17Z" />
          </svg>
          Transaksi Poin
        </button>
      </div>
    </>
  );
}
