$.extend(true,$.fn.dataTable.defaults,{sDom:"<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-responsive't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",sPaginationType:"bootstrap_full_number",oLanguage:{sLengthMenu:"Mostrar _MENU_ por página",sZeroRecords:"No hay nada para mostrar",sInfo:"Mostrando _START_ hasta _END_ de _TOTAL_ productos",sInfoEmtpy:"Mostrando 0 hasta 0 de 0 productos",sSearch:"Buscar",sInfoFiltered:"(de un total de _MAX_)"}});$.extend($.fn.dataTableExt.oStdClasses,{sWrapper:"dataTables_wrapper form-inline"});$.fn.dataTableExt.oApi.fnPagingInfo=function(a){return{iStart:a._iDisplayStart,iEnd:a.fnDisplayEnd(),iLength:a._iDisplayLength,iTotal:a.fnRecordsTotal(),iFilteredTotal:a.fnRecordsDisplay(),iPage:Math.ceil(a._iDisplayStart/a._iDisplayLength),iTotalPages:Math.ceil(a.fnRecordsDisplay()/a._iDisplayLength)}};$.extend($.fn.dataTableExt.oPagination,{bootstrap:{fnInit:function(e,b,d){var a=e.oLanguage.oPaginate;var f=function(g){g.preventDefault();if(e.oApi._fnPageChange(e,g.data.action)){d(e)}};$(b).append('<ul class="pagination"><li class="prev disabled"><a href="#" title="'+a.sPrevious+'"><i class="fa fa-angle-left"></i></a></li><li class="next disabled"><a href="#" title="'+a.sNext+'"><i class="fa fa-angle-right"></i></a></li></ul>');var c=$("a",b);$(c[0]).bind("click.DT",{action:"previous"},f);$(c[1]).bind("click.DT",{action:"next"},f)},fnUpdate:function(c,k){var l=5;var e=c.oInstance.fnPagingInfo();var h=c.aanFeatures.p;var g,f,d,a,m,b=Math.floor(l/2);if(e.iTotalPages<l){a=1;m=e.iTotalPages}else{if(e.iPage<=b){a=1;m=l}else{if(e.iPage>=(e.iTotalPages-b)){a=e.iTotalPages-l+1;m=e.iTotalPages}else{a=e.iPage-b+1;m=a+l-1}}}for(g=0,iLen=h.length;g<iLen;g++){if(e.iTotalPages<0){$(".pagination",h[g]).css("visibility","hidden")}else{$(".pagination",h[g]).css("visibility","visible")}$("li:gt(0)",h[g]).filter(":not(:last)").remove();for(f=a;f<=m;f++){d=(f==e.iPage+1)?'class="active"':"";$("<li "+d+'><a href="#">'+f+"</a></li>").insertBefore($("li:last",h[g])[0]).bind("click",function(i){i.preventDefault();c._iDisplayStart=(parseInt($("a",this).text(),10)-1)*e.iLength;k(c)})}if(e.iPage===0){$("li:first",h[g]).addClass("disabled")}else{$("li:first",h[g]).removeClass("disabled")}if(e.iPage===e.iTotalPages-1||e.iTotalPages===0){$("li:last",h[g]).addClass("disabled")}else{$("li:last",h[g]).removeClass("disabled")}}}}});$.extend($.fn.dataTableExt.oPagination,{bootstrap_full_number:{fnInit:function(e,b,d){var a=e.oLanguage.oPaginate;var f=function(g){g.preventDefault();if(e.oApi._fnPageChange(e,g.data.action)){d(e)}};$(b).append('<ul class="pagination"><li class="prev disabled"><a href="#" title="'+a.sFirst+'"><i class="fa fa-angle-double-left"></i></a></li><li class="prev disabled"><a href="#" title="'+a.sPrevious+'"><i class="fa fa-angle-left"></i></a></li><li class="next disabled"><a href="#" title="'+a.sNext+'"><i class="fa fa-angle-right"></i></a></li><li class="next disabled"><a href="#" title="'+a.sLast+'"><i class="fa fa-angle-double-right"></i></a></li></ul>');var c=$("a",b);$(c[0]).bind("click.DT",{action:"first"},f);$(c[1]).bind("click.DT",{action:"previous"},f);$(c[2]).bind("click.DT",{action:"next"},f);$(c[3]).bind("click.DT",{action:"last"},f)},fnUpdate:function(c,k){var l=5;var e=c.oInstance.fnPagingInfo();var h=c.aanFeatures.p;var g,f,d,a,m,b=Math.floor(l/2);if(e.iTotalPages<l){a=1;m=e.iTotalPages}else{if(e.iPage<=b){a=1;m=l}else{if(e.iPage>=(e.iTotalPages-b)){a=e.iTotalPages-l+1;m=e.iTotalPages}else{a=e.iPage-b+1;m=a+l-1}}}for(g=0,iLen=h.length;g<iLen;g++){if(e.iTotalPages<0){$(".pagination",h[g]).css("visibility","hidden")}else{$(".pagination",h[g]).css("visibility","visible")}$("li:gt(1)",h[g]).filter(":not(.next)").remove();for(f=a;f<=m;f++){d=(f==e.iPage+1)?'class="active"':"";$("<li "+d+'><a href="#">'+f+"</a></li>").insertBefore($("li.next:first",h[g])[0]).bind("click",function(i){i.preventDefault();c._iDisplayStart=(parseInt($("a",this).text(),10)-1)*e.iLength;k(c)})}if(e.iPage===0){$("li.prev",h[g]).addClass("disabled")}else{$("li.prev",h[g]).removeClass("disabled")}if(e.iPage===e.iTotalPages-1||e.iTotalPages===0){$("li.next",h[g]).addClass("disabled")}else{$("li.next",h[g]).removeClass("disabled")}}}}});function kstr(a){console.log(a)}$.extend($.fn.dataTable.oApi,{_fnFeatureHtmlFilter:kstr});