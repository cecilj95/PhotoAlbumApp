using PhotoAlbumServer.Models;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PhotoAlbumServer.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")] // tune to your needs
    public class PhotoAlbumController : ApiController
    {
        [HttpGet]
        public List<PhotoAlbumDB> GetAll(string Username)
        {
            return new PhotoAlbumEntities().PhotoAlbumDBs.Where(i => i.Username == Username).ToList();
        }

        [HttpGet]
        public PhotoAlbumDB Get(int ImageID, string Username)
        {
            return new PhotoAlbumEntities().PhotoAlbumDBs.Where(i => i.PhotoAlbum_ID == ImageID && i.Username == Username).FirstOrDefault();
        }

        [HttpPost]
        public IHttpActionResult AddPhoto(PhotoAlbum DataModel)
        {
            using (PhotoAlbumEntities EF = new PhotoAlbumEntities())
            {
                try
                {
                    PhotoAlbumDB ObjModel = new PhotoAlbumDB();
                    ObjModel.Title = DataModel.Title;
                    ObjModel.Username = DataModel.Username;
                    ObjModel.PhotoImageUrl = SaveData(DataModel.PhotoAlbumImage);
                    EF.PhotoAlbumDBs.Add(ObjModel);
                    EF.SaveChanges();
                    return Ok();
                }
                catch (Exception ex)
                {
                    return Ok(new { Message = ex.Message });
                }
            }
        }

        private string SaveData(string photoAlbumImage)
        {
            string FileName = "/Images/" + DateTime.Now.Ticks + ".jpg";
            byte[] bytes = Convert.FromBase64String(photoAlbumImage.Replace("data:image/jpeg;base64,", ""));
            Image image;
            using (MemoryStream ms = new MemoryStream(bytes))
            {
                image = Image.FromStream(ms);
                image.Save(HttpContext.Current.Server.MapPath(FileName));
            }
            return FileName;
        }

        [HttpPut]
        public IHttpActionResult UpdatePhoto(PhotoAlbum DataModel)
        {
            using (PhotoAlbumEntities EF = new PhotoAlbumEntities())
            {
                PhotoAlbumDB ObjModel = EF.PhotoAlbumDBs.Find(DataModel.PhotoAlbum_ID);
                if (ObjModel.Username == DataModel.Username)
                {
                    ObjModel.Title = DataModel.Title;
                    if (!DataModel.PhotoAlbumImage.StartsWith("http"))
                        ObjModel.PhotoImageUrl = SaveData(DataModel.PhotoAlbumImage);
                    EF.Entry(ObjModel).State = System.Data.Entity.EntityState.Modified;
                    EF.SaveChanges();
                    return Ok();
                }
                else
                {
                    return Unauthorized();
                }
            }
        }

        [HttpDelete]
        public IHttpActionResult Remove(int ImageID, string Username)
        {
            using (PhotoAlbumEntities EF = new PhotoAlbumEntities())
            {
                PhotoAlbumDB ObjModel = EF.PhotoAlbumDBs.Find(ImageID);
                if (ObjModel.Username == Username)
                {
                    EF.PhotoAlbumDBs.Remove(ObjModel);
                    EF.SaveChanges();
                    return Ok();
                }
                else
                {
                    return Unauthorized();
                }
            }
        }
    }
}
