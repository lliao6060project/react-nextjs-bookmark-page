const BlockLayout = ({children, ...props}: any) => {
  const { id, customClass } = props
  return (
    <section
      id={id}
      className={`mb-5 overflow-hidden ${customClass}`}
    >
      <div className="mb-5 py-5 md:py-10 xl:py-16">
        {children}
      </div>
    </section>
  )
}

export default BlockLayout