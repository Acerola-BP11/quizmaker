'use client'

export default function Home() {
  const handleReveal = e => {
    if (e.target.children[0].style.color == 'white') {
      e.target.children[0].style.color = 'black'
    } else {
      e.target.children[0].style.color = 'white'
    }
  }
  return (
    <main className="flex flex-col min-h-screen min-w-screen justify-start">
      <div className="w-full flex justify-center mt-12">
        <h1 className="font-bold text-3xl select-none">Quais são as top 10 capacidades solicitadas do profissional de T.I?</h1>
      </div>
      <div className="flex w-full grow items-center justify-center">
        <div className="grid grid-cols-2 grid-rows-5 gap-10 w-full col-span-5 justify-items-center place-items-center">
          <div className="bg-white rounded-md p-3 w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Teste</span>
          </div>
          <div className="bg-white rounded-md p-3 w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Teste</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Teste</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)} >
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Teste</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Teste</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Teste</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Teste</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Teste</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Teste</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Item 10</span>
          </div>
        </div>
      </div>
    </main>
  )
}
