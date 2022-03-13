export default function Grid({ children }) {
    return (
      <>
        <div className="grid w-full mx-auto grid-cols-3 lg:grid-cols-6 gap-6 p-6 auto-rows-min">
            {children}
        </div>
      </>
    )
  }