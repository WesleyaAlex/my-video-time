import React from 'react'

function Footer() {
  return (
    <div className="bg-footer w-full md:h-[450px] md:flex items-center gap-12    md:flex-row flex-col relative md:static">
      <div className="md:w-[27%] flex flex-col items-center   pt-8 md:pt-0">
        <div>
          <img
            src="myvideo-footer.png"
            alt="My Video Time"
          />
        </div>

        <div className="text-center text-white text-2xl mt-2   absolute md:static bottom-10">
          <p>©  My Vídeo Time 2020</p>
          <p>All Rights Included</p>
        </div>
      </div>

      <div className="grow    mt-4 md:mt-0">
        <div className="md:max-w-3xl    pr-10 pl-10 md:pl-0 xl:pr-0">
          <div className="relative">
            <span className="absolute right-3 top-0 bottom-0 my-auto h-[33px] w-[31px]">
              <img
                src="icon-search.png"
                alt="My Video Time"
              />
            </span>
            <input className="w-full bg-footer border border-white rounded-xl h-[61px] text-white pl-3 text-2xl outline-none pr-14" type="text" name="search" />
          </div>

          <div className="flex items-center justify-center text-white text-2xl text-center md:gap-20    gap-8 flex-col md:flex-row mt-12 pb-40 md:pb-0">
            <div>
              <h4 className="mb-2">Faça uma reunião</h4>
              <p>Cursos</p>
              <p>Aulas Particulares</p>
              <p>Idiomas</p>
              <p>Consultas</p>
              <p>Consultorias</p>
            </div>

            <div>
              <h4 className="mb-2">Informações Úteis</h4>
              <p>Fale Conosco</p>
              <p>FAQ - Perguntas Frequentes</p>
              <p>Vire um Professor</p>
              <p>Política de Privacidade</p>
              <p>Blog</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
