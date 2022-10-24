
const Email = {
  getDiscountTemplate: (callback, data) => {
    var discountEmailTemplate = ""
    discountEmailTemplate = `<body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #eeeeee">
                <!--[if IE]><div class="ie-container"><![endif]-->
                <!--[if mso]><div class="mso-container"><![endif]-->
                <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #eeeeee;width:100%" cellpadding="0" cellspacing="0">
                <tbody>
                <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #eeeeee;"><![endif]-->
                  
              
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
                    
              <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
             
              
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #47484b; line-height: 140%; text-align: center; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 30px; line-height: 42px;">Thanks for Choosing Polar Tech</span></strong></p>
                </div>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              ${data.coupon !== null ?
        `<table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:2px 40px 25px;font-family:'Open Sans',sans-serif;" align="left">
                  
                 <div class="v-text-align" style="color: #7a7676; line-height: 170%; text-align: left; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 170%; text-align: center;"><span style="font-size: 16px; line-height: 27.2px;"><strong>Congratulations you get ${data.$}% Discount&nbsp; &nbsp;</strong>&nbsp;</span></p>
                </div>  
              
                    </td>
                  </tr>
                </tbody>
              </table>`: ``}
              
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                  <tbody>
                    <tr style="vertical-align: top">
                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <span>&#160;</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              
              
              
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
                    
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table id="u_content_text_14" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: left; word-wrap: break-word;">
                  <p style="line-height: 140%; font-size: 14px;"><span style="line-height: 19.6px; font-size: 14px;"><strong style="font-size: 14px;">Customer </strong><strong>Information</strong><strong style="font-size: 14px;">&nbsp;</strong></span></p>
                </div>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table id="u_content_text_15" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: right; word-wrap: break-word;">
                  
                </div>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              
              
              
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
                    
              <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                  <tbody>
                    <tr style="vertical-align: top">
                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <span>&#160;</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              
              
              
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row no-stack" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
                    
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: left; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">Name</span></p>
                </div>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: right; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">${data.name}</span></p>
                </div>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              
              
              
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row no-stack" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
                    
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: left; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">Email</span></p>
                </div>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: right; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;">${data.email}</p>
                </div>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              
              
              
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row no-stack" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
                    
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: left; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">Appliance</span></p>
                </div>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: right; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;">${data.appliance}</p>
                </div>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              
              
              
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row no-stack" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
                    
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: left; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;">Model</p>
                </div>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: right; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;">${data.model}</p>
                </div>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              
              
              
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row no-stack" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
                    
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: left; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;">Issue</p>
                </div>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: right; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;">${data.otherIssue === "not" ? data.issue : data.otherIssue}</p>
                </div>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              
              
              
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
                    
              <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                  <tbody>
                    <tr style="vertical-align: top">
                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <span>&#160;</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              
              
              
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row no-stack" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
                    
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
                ${data.coupon !== null ? `<table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                
                 <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: left; word-wrap: break-word;">
                <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 14px; line-height: 19.6px;">Coupon </span></strong></p>
              </div>    </td>
                  </tr>
                </tbody>
              </table>`: ``}   
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                ${data.coupon !== null ?
        `<table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #615e5e; line-height: 140%; text-align: right; word-wrap: break-word;">
               
        <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 14px; line-height: 19.6px;">${data.coupon}</span></strong></p>
                 
                </div> 
                    </td>
                  </tr>
                </tbody>
              </table>`
        : ``}     
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              
              
              
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
                    
              <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                  <tbody>
                    <tr style="vertical-align: top">
                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <span>&#160;</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              
              
              
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
                    
              <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:14px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                  <tbody>
                    <tr style="vertical-align: top">
                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <span>&#160;</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              
                    </td>
                  </tr>
                </tbody>
              </table>
              
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              
              
              
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
                    
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
              <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 30px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
              <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 30px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                
              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tbody>
                  <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                      
                <div class="v-text-align" style="color: #5c5757; line-height: 140%; text-align: left; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 14px; line-height: 19.6px;">&nbsp;Addresss:</span></strong></p>
              <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">${data.address}</span></p>
                </div> 
                    </td>
                  </tr>
                  <tr>
                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                    
              <div class="v-text-align" style="color: #5c5757; line-height: 140%; text-align: left; word-wrap: break-word;">
                <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 14px; line-height: 19.6px;">&nbsp;Date:</span></strong></p>
            <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">${data.date}</span></p>
              </div> 
                  </td>
                </tr>
                </tbody>
              </table> 
              </body>
`;
    // console.info( discountEmailTemplate)
    callback(discountEmailTemplate)
  },


}
export default Email;




