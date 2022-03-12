export default function Grid({ children }) {
    return (
      <>
        <div className="grid grid-cols-6 gap-4 w-full">
            {children}
        </div>
      </>
    )
  }