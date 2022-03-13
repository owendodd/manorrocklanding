export default function Grid({ children }) {
    return (
      <>
        <div className="grid w-full max-w-7xl mx-auto grid-cols-3 lg:grid-cols-6 gap-6 p-6 auto-rows-auto">
            {children}
        </div>
      </>
    )
  }