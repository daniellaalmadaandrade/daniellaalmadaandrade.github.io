(function(){
  'use strict';

  function replaceText(root, regex, replacement){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n=>{
      if(regex.test(n.nodeValue)){
        regex.lastIndex=0;
        n.nodeValue=n.nodeValue.replace(regex,replacement);
      }
    });
  }

  function addStyles(){
    if(document.getElementById('dna-v16-styles')) return;
    const style=document.createElement('style');
    style.id='dna-v16-styles';
    style.textContent=`
      .dna-v16-topo{position:relative;max-width:1020px;margin:0 auto 52px;}
      .dna-v16-topo img{display:block;width:100%;height:auto;border-radius:22px;object-fit:cover;box-shadow:0 35px 90px rgba(0,0,0,.38);}
      .dna-v16-badge{position:absolute;left:22px;top:22px;z-index:3;padding:11px 16px;border-radius:999px;background:#721632;color:#fff;font:900 .72rem/1 Arial,Helvetica,sans-serif;letter-spacing:.12em;text-transform:uppercase;box-shadow:0 8px 28px rgba(0,0,0,.28);}
      .dna-v16-economia{display:inline-flex;margin:12px 0 0;padding:8px 14px;border-radius:999px;background:#10351d;color:#1fd35b;font:800 .86rem/1.2 Arial,Helvetica,sans-serif;letter-spacing:.02em;}
      .dna-v16-acesso{margin-top:14px;color:rgba(255,255,255,.88);font-weight:700;}
      @media(max-width:700px){.dna-v16-badge{left:12px;top:12px;padding:9px 12px;font-size:.63rem}.dna-v16-topo{margin-bottom:34px}.dna-v16-topo img{border-radius:16px}}
    `;
    document.head.appendChild(style);
  }

  function updateCohort(){
    document.title=document.title.replace(/3ª\s*Turma/gi,'4ª Turma').replace(/3ª\s*turma/gi,'4ª turma');
    replaceText(document.body,/3ª\s*turma/gi,'4ª turma');
    replaceText(document.body,/terceira\s+turma/gi,'quarta turma');
  }

  function replaceVideoWithImage(){
    const videoBlock=document.querySelector('.abertura-video');
    if(!videoBlock) return;
    videoBlock.innerHTML=`
      <div class="dna-v16-topo">
        <span class="dna-v16-badge">4ª TURMA • INSCRIÇÕES ABERTAS</span>
        <img src="dna-topo-4a-turma.jpg" alt="Daniella Almada — DNA dos Contratos — 4ª turma">
      </div>`;
  }

  function updateOffer(){
    const oldPrice=document.querySelector('.preco-card-antigo');
    const currentPrice=document.querySelector('.preco-card-atual');
    const priceText=document.querySelector('.preco-card-texto');
    const priceBox=document.querySelector('.preco-card');
    const offer=document.querySelector('.oferta-card');

    if(oldPrice) oldPrice.textContent='De R$ 1.597,00';
    if(currentPrice) currentPrice.innerHTML='<span style="font-family:Arial,Helvetica,sans-serif;font-size:.55em;font-weight:800;letter-spacing:-.01em">12× de</span> R$ 83,08*';
    if(priceText) priceText.textContent='R$ 997,00 à vista';

    if(priceBox && !priceBox.querySelector('.dna-v16-economia')){
      const saving=document.createElement('div');
      saving.className='dna-v16-economia';
      saving.textContent='ECONOMIZE R$ 600,00';
      if(currentPrice) currentPrice.insertAdjacentElement('afterend',saving);
      else priceBox.appendChild(saving);

      const access=document.createElement('div');
      access.className='dna-v16-acesso';
      access.textContent='24 meses de acesso à formação completa';
      saving.insertAdjacentElement('afterend',access);
    }

    if(offer){
      const lis=[...offer.querySelectorAll('li')];
      const accessLi=lis.find(li=>/acesso/i.test(li.textContent));
      if(accessLi) accessLi.textContent='24 meses de acesso ao curso';

      const hasAnalysis=lis.some(li=>/análise contratual/i.test(li.textContent));
      if(!hasAnalysis){
        const ul=offer.querySelector('ul');
        if(ul){
          const li=document.createElement('li');
          li.textContent='Módulo de Análise Contratual com análise de contratos variados';
          ul.appendChild(li);
        }
      }
    }

    const info=document.querySelector('.checkout-info');
    if(info) info.textContent='R$ 997,00 à vista • Economia de R$ 600,00';
  }

  function updateAccessElsewhere(){
    document.querySelectorAll('.numero, .stat, [class*="acesso"]').forEach(el=>{
      const t=el.textContent || '';
      if(/12\s*m|12\s*mes|1\s*ano/i.test(t) && /acesso/i.test(t)){
        const strong=el.querySelector('strong');
        if(strong) strong.textContent='24m';
      }
    });
  }

  function run(){
    addStyles();
    updateCohort();
    replaceVideoWithImage();
    updateOffer();
    updateAccessElsewhere();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run);
  else run();
})();
