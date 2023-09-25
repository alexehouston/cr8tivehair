import "./Policies.css";

export default function Policies() {
  return (
    <div className="Policies d-flex flex-column justify-content-center align-items-center col-lg-8 mx-auto">
      <div className="animate__animated animate__fadeInUp animate__slow pb-5">
        <h1 className="mx-auto text-xl">Salon Policy</h1>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="hair-img animate__animated animate__fadeInDown animate__slow animate__delay-2s">
          <img src="/assets/21.jpeg" alt="" />
        </div>
        <div className="col-lg-4 d-flex flex-column align-items-center animate__animated animate__fadeInUp animate__slower">
        <div className="policies-inner text-center p-2">
          <h4 className="text-uppercase">Credit Card on File</h4>
          <p>
            Cr8tive Elements Hair Studio requires a credit card to be kept on
            file in support of our policies.
          </p>
          <h4 className="text-uppercase">Cancellations & No Showing</h4>
          <p>
            We value our guests and their time just as much as we value our
            staff and their time, therefore we have a 48-hour cancellation
            policy for all appointments. If for any reason a guest is unable to
            make their appointment, please contact the stylist to cancel the
            appointment with at least 48 hours of notice. If a less than 48-hour
            notice is given, then 50% of the service fee will be charged to the
            credit card on file. In the event the guest does not show up for the
            scheduled appointment and fails to give any notice, the guest is
            considered a &quot;no show&quot; and 100% of the service fee will be
            charged to the credit card on file.
          </p>
          <h4 className="text-uppercase">Late Policy</h4>
          <p>
            Out of respect for other guests and our stylists&apos; time, we have
            a 15-minute late policy. If a guest is 15 minutes late or more, they
            may be asked to shorten their service time or be asked to reschedule
            their appointment to another time. In the case of a need to
            reschedule, there may be a charge for 50% of the missed service,
            which will be charged to the credit card on file.
          </p>
          <h4 className="text-uppercase">New Guest Deposits</h4>
          <p>
            A $100 deposit is required upon booking an appointment time for all
            new guests and those that haven&apos;t had an appointment within 12+
            months. The deposit will be credited to the guest&apos;s account at
            the time of service.
          </p>
          <h4 className="text-uppercase">Refunds and Color Adjustments</h4>
          <p>
            Parlour One services are non-refundable, however, there are
            circumstances where an adjustment may need to be made. At Parlour
            One Salon, guest satisfaction is our top priority. If a guest is
            unsatisfied with their service, we are happy to schedule a
            complimentary adjustment appointment. Please contact the salon
            within 72 hours of the service date if there are any issues.
          </p>
          <h4 className="text-uppercase">Children</h4>
          <p>
            Children are welcome when receiving a service, however, we kindly
            ask that children are not brought along to the guest appointment.
            This is for the safety of the child and concerning other salon
            guests.
          </p>
          <h4 className="text-uppercase">Payment</h4>
          <p>
            We accept all major credit cards, or cash. Personal checks and Venmo
            are not accepted.
          </p>
        </div>
        <div className="bg-dark-beige head-font rounded-pill text-center mt-4 fs-6 w-25 pt-1">Scroll Down</div>
        </div>
        <div className="hair-img animate__animated animate__fadeInDown animate__slow animate__delay-1s">
          <img src="/assets/17.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}
