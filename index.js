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
                      {% if order.fulfillment_status == "fulfilled" %}
                        <span class="label-tag ">{{ 'customer.fulfillment_status.fulfilled' | t }}</span>
                      {% elsif order.fulfillment_status == "partially_fulfilled" %}
                        <span class="label-tag label-tag-warning">{{ 'customer.fulfillment_status.partially_fulfilled' | t }}</span>
                      {% else %}
                        <span class="label-tag label-tag-warning">{{ 'customer.fulfillment_status.unfulfilled' | t }}</span>
                      {% endif %}
                    </td>
                  {% endif %}
                  <td  headers="RowOrder ColumnTotal" role="cell" data-label="{{ 'customer.orders.total' | t }}">{{order.currency}} {{ order.total_price }}</td>
                </tr>
              {% endfor %}
            </tbody>  
             
    </table>
  </div>
</div>`;
