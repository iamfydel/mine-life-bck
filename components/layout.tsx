import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="main-wrapper-layout">        
        <main>{children}</main>
      </div>      
    </>
  )
}
