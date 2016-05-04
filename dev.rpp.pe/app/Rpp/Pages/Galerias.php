<?php
namespace Rpp\Pages;
class Galerias extends \Rpp\Pages\Page
{
    public $titulo;
    public $channel;
    public $ref ;
    public $slug ;
    public $epl;
    public $comscore;
    public $description;
    public $keywords;
    
    public function __construct()
    {
      parent::__construct();
      $this->titulo='Noticias del Peru y del Mundo ,Ollanta Humala,Nadine Heredia,Perumin,Caso Oropeza,Humberto Martínez Morosini,Aylan Kurdi,Donald Trump  | RPP NOTICIAS';
      \Rpp\Services\Get\UrlTrack::$ns_mchannel = 'galerias.';
      $this->epl = 'Portada';
      $this->comscore = 'galerias.paginaprincipal';
      $this->slug = 'galerias';
      $this->description = 'RPP Noticias tiene las &uacute;ltimas noticias sobre pol&iacute;tica, futbol y far&aacute;ndula nacional e internacional. Ediciones regionales y de todo el Peru';
      $this->keywords = 'rppnoticias, noticias del peru y el mundo ,Ollanta Humala,Nadine Heredia,Perumin,Caso Oropeza,Humberto Martínez Morosini,Aylan Kurdi,Donald Trump';
      $this->titulo_social = 'RPP Noticias tiene las &uacute;ltimas noticias sobre pol&iacute;tica, futbol y far&aacute;ndula nacional e internacional. Ediciones regionales y de todo el Peru';
      $this->img_social = 'http://s.rpp-noticias.io/images/imgshare.jpg';
     $this->url_social = '';    
    }

}
