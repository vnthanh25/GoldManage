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
using System.Web.Http.Cors;

namespace GoldManage.Controllers.APIControllers
{
    [EnableCors(origins: "http://localhost", headers: "*", methods: "*")]
    public class UnitsController : ApiController
    {
        private GoldManageEntities db = new GoldManageEntities();

        // GET: api/Units
        public IQueryable<Unit> GetUnit()
        {
            return db.Unit;
        }

        // GET: api/Units/5
        [ResponseType(typeof(Unit))]
        public IHttpActionResult GetUnit(int id)
        {
            Unit unit = db.Unit.Find(id);
            if (unit == null)
            {
                return NotFound();
            }

            return Ok(unit);
        }

        // PUT: api/Units/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUnit(int id, Unit unit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != unit.Id)
            {
                return BadRequest();
            }

            db.Entry(unit).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UnitExists(id))
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

        // POST: api/Units
        [ResponseType(typeof(Unit))]
        public IHttpActionResult PostUnit(Unit unit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Unit.Add(unit);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = unit.Id }, unit);
        }

        // DELETE: api/Units/5
        [ResponseType(typeof(Unit))]
        public IHttpActionResult DeleteUnit(int id)
        {
            Unit unit = db.Unit.Find(id);
            if (unit == null)
            {
                return NotFound();
            }

            db.Unit.Remove(unit);
            db.SaveChanges();

            return Ok(unit);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UnitExists(int id)
        {
            return db.Unit.Count(e => e.Id == id) > 0;
        }
    }
}