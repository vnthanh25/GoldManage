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
    public class ExInvoiceDetailsController : ApiController
    {
        private GoldManageEntities db = new GoldManageEntities();

        // GET: api/ExInvoiceDetails
        public IQueryable<ExInvoiceDetail> GetExInvoiceDetail()
        {
            return db.ExInvoiceDetail;
        }

        // GET: api/ExInvoiceDetails/5
        [ResponseType(typeof(ExInvoiceDetail))]
        public IHttpActionResult GetExInvoiceDetail(int id)
        {
            ExInvoiceDetail exInvoiceDetail = db.ExInvoiceDetail.Find(id);
            if (exInvoiceDetail == null)
            {
                return NotFound();
            }

            return Ok(exInvoiceDetail);
        }

        // PUT: api/ExInvoiceDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutExInvoiceDetail(int id, ExInvoiceDetail exInvoiceDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != exInvoiceDetail.Id)
            {
                return BadRequest();
            }

            db.Entry(exInvoiceDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExInvoiceDetailExists(id))
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

        // POST: api/ExInvoiceDetails
        [ResponseType(typeof(ExInvoiceDetail))]
        public IHttpActionResult PostExInvoiceDetail(ExInvoiceDetail exInvoiceDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ExInvoiceDetail.Add(exInvoiceDetail);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = exInvoiceDetail.Id }, exInvoiceDetail);
        }

        // DELETE: api/ExInvoiceDetails/5
        [ResponseType(typeof(ExInvoiceDetail))]
        public IHttpActionResult DeleteExInvoiceDetail(int id)
        {
            ExInvoiceDetail exInvoiceDetail = db.ExInvoiceDetail.Find(id);
            if (exInvoiceDetail == null)
            {
                return NotFound();
            }

            db.ExInvoiceDetail.Remove(exInvoiceDetail);
            db.SaveChanges();

            return Ok(exInvoiceDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ExInvoiceDetailExists(int id)
        {
            return db.ExInvoiceDetail.Count(e => e.Id == id) > 0;
        }
    }
}