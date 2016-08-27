using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using GoldManageModel;

namespace GoldManage.Controllers.APIControllers
{
    public class SubItemsController : ApiController
    {
        private GoldManageEntities db = new GoldManageEntities();

        // GET: api/SubItems
        public IQueryable<SubItem> GetSubItem()
        {
            return db.SubItem;
        }

        // GET: api/SubItems/5
        [ResponseType(typeof(SubItem))]
        public IHttpActionResult GetSubItem(int id)
        {
            SubItem subItem = db.SubItem.Find(id);
            if (subItem == null)
            {
                return NotFound();
            }

            return Ok(subItem);
        }

        // PUT: api/SubItems/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSubItem(int id, SubItem subItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != subItem.Id)
            {
                return BadRequest();
            }

            db.Entry(subItem).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/SubItems
        [ResponseType(typeof(SubItem))]
        public IHttpActionResult PostSubItem(SubItem subItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SubItem.Add(subItem);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = subItem.Id }, subItem);
        }

        // DELETE: api/SubItems/5
        [ResponseType(typeof(SubItem))]
        public IHttpActionResult DeleteSubItem(int id)
        {
            SubItem subItem = db.SubItem.Find(id);
            if (subItem == null)
            {
                return NotFound();
            }

            db.SubItem.Remove(subItem);
            db.SaveChanges();

            return Ok(subItem);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SubItemExists(int id)
        {
            return db.SubItem.Count(e => e.Id == id) > 0;
        }
    }
}