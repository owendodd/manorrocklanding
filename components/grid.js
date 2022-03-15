export default function Grid(props) {
    return (
      <div className={"grid w-full mx-auto grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-3 px-6 md:px-32 " + (props.className)}>
          {props.children}
      </div>
  )
  }