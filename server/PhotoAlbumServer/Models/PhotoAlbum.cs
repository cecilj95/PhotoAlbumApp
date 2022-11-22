using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PhotoAlbumServer.Models
{
    public class PhotoAlbum
    {
        public int PhotoAlbum_ID { get; set; }
        public string PhotoAlbumImage { get; set; }
        public string Title { get; set; }

        public string Username { get; set; }
    }
}