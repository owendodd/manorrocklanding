export default function Grid({ children }) {
    return (
      <>
        <div className="grid w-full mx-auto grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-3 px-8 md:px-32 auto-rows-min">
            {children}
        </div>
      </>
    )
  }