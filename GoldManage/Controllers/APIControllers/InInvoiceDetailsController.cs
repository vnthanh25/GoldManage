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
    public class InInvoiceDetailsController : ApiController
    {
        private GoldManageEntities db = new GoldManageEntities();

        // GET: api/InInvoiceDetails
        public IQueryable<InInvoiceDetail> GetInInvoiceDetail()
        {
            return db.InInvoiceDetail;
        }

        // GET: api/InInvoiceDetails/5
        [ResponseType(typeof(InInvoiceDetail))]
        public IHttpActionResult GetInInvoiceDetail(int id)
        {
            InInvoiceDetail inInvoiceDetail = db.InInvoiceDetail.Find(id);
            if (inInvoiceDetail == null)
            {
                return NotFound();
            }

            return Ok(inInvoiceDetail);
        }

        // PUT: api/InInvoiceDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutInInvoiceDetail(int id, InInvoiceDetail inInvoiceDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != inInvoiceDetail.Id)
            {
                return BadRequest();
            }

            db.Entry(inInvoiceDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InInvoiceDetailExists(id))
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

        // POST: api/InInvoiceDetails
        [ResponseType(typeof(InInvoiceDetail))]
        public IHttpActionResult PostInInvoiceDetail(InInvoiceDetail inInvoiceDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.InInvoiceDetail.Add(inInvoiceDetail);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = inInvoiceDetail.Id }, inInvoiceDetail);
        }

        // DELETE: api/InInvoiceDetails/5
        [ResponseType(typeof(InInvoiceDetail))]
        public IHttpActionResult DeleteInInvoiceDetail(int id)
        {
            InInvoiceDetail inInvoiceDetail = db.InInvoiceDetail.Find(id);
            if (inInvoiceDetail == null)
            {
                return NotFound();
            }

            db.InInvoiceDetail.Remove(inInvoiceDetail);
            db.SaveChanges();

            return Ok(inInvoiceDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool InInvoiceDetailExists(int id)
        {
            return db.InInvoiceDetail.Count(e => e.Id == id) > 0;
        }
    }
}