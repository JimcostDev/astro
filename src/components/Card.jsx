import React from 'react';

const Card = ({ id, company, certification, link }) => {
  const idStatus = id % 2 === 0 ? 'Par' : 'Impar';

  return (
    <div className="flex flex-col items-center justify-between w-full py-4 px-2 rounded-md border-2 border-green-400">
      <span className={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full uppercase tracking-wide text-center
        ${idStatus === 'Par' ? 'bg-green-400 text-white' : 'bg-green-200 text-green-400'}`}>
        {id}
      </span>
      <h3 className="font-bold text-xl text-green-400 text-center">{company}</h3>
      <p className="font-light text-white text-center my-2">{certification}</p>
      <a className="text-green-400 hover:text-green-700 text-sm text-center" href={link}>
        Ver Certificación
      </a>
    </div>
  );
};

export default Card;
