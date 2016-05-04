<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <?php foreach (\Rpp\Services\Get\Archivo::ultimas_seccion($slug,48) as $item) : ?>
   <url>
      <loc><?php echo $host; ?><?php echo \Rpp\Services\Get\Content::nurl($item->_id); ?></loc>
      <lastmod><?php echo date('Y-m-d\TH:i:sP', \Rpp\Services\Get\Content::node($item->_id)->fecha_publicacion); ?></lastmod>
         <changefreq>hourly</changefreq>
      <priority>1.0</priority>
   </url>
   <?php endforeach; ?>
</urlset>