const pages1 = document.getElementById('pages1');
pages1.innerHTML = `{% if customer.orders.size != 0 %}
 <div class="card">
  <div class="table-responsive">
    <table class="table align-items-center mb-0">
      <thead>
      
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7" id="ColumnOrder" scope="col" role="columnheader">{{ 'customer.orders.order_number' | t }}</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2" id="ColumnDate" scope="col" role="columnheader">{{ 'customer.orders.date' | t }}</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7" id="ColumnPayment" scope="col" role="columnheader">{{ 'customer.orders.payment_status' | t }}</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7" id="ColumnFulfillment" scope="col" role="columnheader">{{ 'customer.orders.fulfillment_status' | t }}</th>
                <th class="text-secondary opacity-7" id="ColumnTotal" scope="col" role="columnheader">{{ 'customer.orders.total' | t }}</th>
              </tr>
         
      </thead>
           <tbody>
              {% for order in customer.orders %}
                <tr>
                  <td id="RowOrder" role="cell" headers="ColumnOrder" data-label="{{ 'customer.orders.order_number' | t }}">{{ order.name | link_to: order.customer_url }}</td>
                  <td headers="RowOrder ColumnDate" role="cell" data-label="{{ 'customer.orders.date' | t }}">{{ order.created_at | date: "%b %d, %Y" }}</td>
                  {% if order.is_cancelled == 1%}
                    <td colspan="2"> <span class="label-tag label-tag-alert">{{ "customer.fulfillment_activity.cancelled" | t }}</span></td>
                  {% else %}
                    <td headers="RowOrder ColumnPayment" role="cell" data-label="{{ 'customer.orders.payment_status' | t }}">
                      {% if order.financial_status == "paid" %}
                        <span class="label-tag ">{{ 'customer.financial_status.paid' | t }}</span>
                      {% elsif order.financial_status == "refund" %}
                        <span class="label-tag ">{{ 'customer.financial_status.refund' | t }}</span>
                      {% elsif order.financial_status == "pending" %}
                        <span class="label-tag label-tag-warning">{{ 'customer.financial_status.pending' | t }}</span>
                      {% elsif order.financial_status == "partially_paid" %}
                        <span class="label-tag label-tag-warning">{{ 'customer.financial_status.partially_paid' | t }}</span>
                      {% elsif order.financial_status == "authorized" %}
                        <span class="label-tag label-tag-warning">{{ 'customer.financial_status.authorized' | t }}</span>
                      {% else %}
                        <span class="label-tag label-tag-warning">{{ 'customer.financial_status.unpaid' | t }}</span>
                      {% endif %}
                    </td>
                    <td headers="RowOrder ColumnFulfillment" role="cell" data-label="{{ 'customer.orders.fulfillment_status' | t }}">
                <p class="text-xs text-secondary mb-0">alexa@creative-tim.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class="text-xs font-weight-bold mb-0">Programator</p>
            <p class="text-xs text-secondary mb-0">Developer</p>
          </td>
          <td class="align-middle text-center text-sm">
            <span class="badge badge-sm badge-secondary">Offline</span>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">11/01/19</span>
          </td>
          <td class="align-middle">
            <a href="#!" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div>
                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-4.jpg" class="avatar avatar-sm me-3">
              </div>
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-xs">Laurent Perrier</h6>
                <p class="text-xs text-secondary mb-0">laurent@creative-tim.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class="text-xs font-weight-bold mb-0">Executive</p>
            <p class="text-xs text-secondary mb-0">Projects</p>
          </td>
          <td class="align-middle text-center text-sm">
            <span class="badge badge-sm badge-success">Online</span>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">19/09/17</span>
          </td>
          <td class="align-middle">
            <a href="#!" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div>
                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-3.jpg" class="avatar avatar-sm me-3">
              </div>
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-xs">Michael Levi</h6>
                <p class="text-xs text-secondary mb-0">michael@creative-tim.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class="text-xs font-weight-bold mb-0">Programator</p>
            <p class="text-xs text-secondary mb-0">Developer</p>
          </td>
          <td class="align-middle text-center text-sm">
            <span class="badge badge-sm badge-success">Online</span>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">24/12/08</span>
          </td>
          <td class="align-middle">
            <a href="#!" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div>
                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg" class="avatar avatar-sm me-3">
              </div>
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-xs">Richard Gran</h6>
                <p class="text-xs text-secondary mb-0">richard@creative-tim.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class="text-xs font-weight-bold mb-0">Manager</p>
            <p class="text-xs text-secondary mb-0">Executive</p>
          </td>
          <td class="align-middle text-center text-sm">
            <span class="badge badge-sm badge-secondary">Offline</span>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">04/10/21</span>
          </td>
          <td class="align-middle">
            <a href="#!" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div>
                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-4.jpg" class="avatar avatar-sm me-3">
              </div>
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-xs">Miriam Eric</h6>
                <p class="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class="text-xs font-weight-bold mb-0">Programtor</p>
            <p class="text-xs text-secondary mb-0">Developer</p>
          </td>
          <td class="align-middle text-center text-sm">
            <span class="badge badge-sm badge-secondary">Offline</span>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">14/09/20</span>
          </td>
          <td class="align-middle">
            <a href="#!" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`;
