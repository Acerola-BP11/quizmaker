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
    <main className="flex flex-col min-h-screen min-w-screen justify-start bg-black">
      <div className="w-full flex justify-center mt-12">
        <h1 className="font-bold text-3xl select-none text-white">Quais são as top 10 capacidades solicitadas do profissional de T.I?</h1>
      </div>
      <div className="flex w-full grow items-center justify-center">
        <div className="grid grid-cols-2 grid-rows-5 gap-10 w-full col-span-5 justify-items-center place-items-center">
          <div className="bg-white rounded-md p-3 w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Programação Básica</span>
          </div>
          <div className="bg-white rounded-md p-3 w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Design UX/UA</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Engenharia de Dados</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)} >
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Data Visualization</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Edição de vídeo</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Organização</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Autoconfiança</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Trabalho em equipe</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-2xl select-none pointer-events-none" style={{ color: 'white' }}>Relacionamento interpessoal</span>
          </div>
          <div className="bg-white rounded-md p-3  w-96 text-center" onClick={e => handleReveal(e)}>
            <span className="text-4xl select-none pointer-events-none" style={{ color: 'white' }}>Liderança</span>
          </div>
        </div>
      </div>
    </main>
  )
}
