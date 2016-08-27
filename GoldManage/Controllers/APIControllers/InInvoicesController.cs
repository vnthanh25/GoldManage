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
    public class InInvoicesController : ApiController
    {
        private GoldManageEntities db = new GoldManageEntities();

        // GET: api/InInvoices
        public IQueryable<InInvoice> GetInInvoice()
        {
            return db.InInvoice;
        }

        // GET: api/InInvoices/5
        [ResponseType(typeof(InInvoice))]
        public IHttpActionResult GetInInvoice(int id)
        {
            InInvoice inInvoice = db.InInvoice.Find(id);
            if (inInvoice == null)
            {
                return NotFound();
            }

            return Ok(inInvoice);
        }

        // PUT: api/InInvoices/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutInInvoice(int id, InInvoice inInvoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != inInvoice.Id)
            {
                return BadRequest();
            }

            db.Entry(inInvoice).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InInvoiceExists(id))
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

        // POST: api/InInvoices
        [ResponseType(typeof(InInvoice))]
        public IHttpActionResult PostInInvoice(InInvoice inInvoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.InInvoice.Add(inInvoice);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = inInvoice.Id }, inInvoice);
        }

        // DELETE: api/InInvoices/5
        [ResponseType(typeof(InInvoice))]
        public IHttpActionResult DeleteInInvoice(int id)
        {
            InInvoice inInvoice = db.InInvoice.Find(id);
            if (inInvoice == null)
            {
                return NotFound();
            }

            db.InInvoice.Remove(inInvoice);
            db.SaveChanges();

            return Ok(inInvoice);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool InInvoiceExists(int id)
        {
            return db.InInvoice.Count(e => e.Id == id) > 0;
        }
    }
}