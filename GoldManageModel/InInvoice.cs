//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GoldManageModel
{
    using System;
    using System.Collections.Generic;
    
    public partial class InInvoice
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public InInvoice()
        {
            this.InInvoiceDetail = new HashSet<InInvoiceDetail>();
        }
    
        public int Id { get; set; }
        public string No { get; set; }
        public Nullable<System.DateTime> InDate { get; set; }
        public string Description { get; set; }
        public Nullable<int> Debit { get; set; }
        public Nullable<double> TotalWeightO { get; set; }
        public Nullable<double> TotalWeight { get; set; }
        public Nullable<double> Total { get; set; }
        public Nullable<int> ObjectId { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<InInvoiceDetail> InInvoiceDetail { get; set; }
    }
}
