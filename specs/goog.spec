visit http://google.com:
  query body:
    click selector 'a._Gs[href="//www.google.com/intl/en/policies/privacy/?fg=1"]'
    after selector 'a[href="//myaccount.google.com/"]' exists
    1 '.policy-pdf' exists