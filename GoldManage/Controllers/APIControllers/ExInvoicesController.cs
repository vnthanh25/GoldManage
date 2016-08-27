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
    public class ExInvoicesController : ApiController
    {
        private GoldManageEntities db = new GoldManageEntities();

        // GET: api/ExInvoices
        public IQueryable<ExInvoice> GetExInvoice()
        {
            return db.ExInvoice;
        }

        // GET: api/ExInvoices/5
        [ResponseType(typeof(ExInvoice))]
        public IHttpActionResult GetExInvoice(int id)
        {
            ExInvoice exInvoice = db.ExInvoice.Find(id);
            if (exInvoice == null)
            {
                return NotFound();
            }

            return Ok(exInvoice);
        }

        // PUT: api/ExInvoices/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutExInvoice(int id, ExInvoice exInvoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != exInvoice.Id)
            {
                return BadRequest();
            }

            db.Entry(exInvoice).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExInvoiceExists(id))
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

        // POST: api/ExInvoices
        [ResponseType(typeof(ExInvoice))]
        public IHttpActionResult PostExInvoice(ExInvoice exInvoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ExInvoice.Add(exInvoice);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = exInvoice.Id }, exInvoice);
        }

        // DELETE: api/ExInvoices/5
        [ResponseType(typeof(ExInvoice))]
        public IHttpActionResult DeleteExInvoice(int id)
        {
            ExInvoice exInvoice = db.ExInvoice.Find(id);
            if (exInvoice == null)
            {
                return NotFound();
            }

            db.ExInvoice.Remove(exInvoice);
            db.SaveChanges();

            return Ok(exInvoice);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ExInvoiceExists(int id)
        {
            return db.ExInvoice.Count(e => e.Id == id) > 0;
        }
    }
}