Blockly.JavaScript['document'] = function(block) {
  var code = '';
  var dropdown_type = block.getFieldValue('type');
  var dclass = '';
  if(dropdown_type == 'other'){
	  typeString = block.getFieldValue('type_string');
	  if(typeString != null) dclass = typeString;
  }else{
	  dclass = dropdown_type;
  }
  code += '\\documentclass{'+dclass+'}\n';
  code += '\\title{'+block.getFieldValue('title')+'}\n';
  code += '\\author{'+block.getFieldValue('author')+'}\n';
  code += '\\date{'+block.getFieldValue('date')+'}\n';
  code += '\\begin{document}\n';
  var statements_document_input = Blockly.JavaScript.statementToCode(block, 'document_input');
  code += statements_document_input;
  code += '\\end{document}\n';
  return code;
};

Blockly.JavaScript['make_title'] = function(block) {
  var code = '\\maketitle\n';
  return code;
};

Blockly.JavaScript['extend_string'] = function(block) {
  var text_text = block.getFieldValue('text');
  var value_text = Blockly.JavaScript.valueToCode(block, 'string_input', Blockly.JavaScript.ORDER_NONE);
  var code = text_text + value_text;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['special_character'] = function(block) {
  var ch = block.getFieldValue('char');
  switch(ch){
	  case 'p': ch = '\n\n'; break;
	  case 'hline': ch = '\n\\hrule\n'; break;
	  case 'alpha': ch = '$\\alpha$'; break;
	  case 'beta': ch = '$\\beta$'; break;
	  case 'gamma': ch = '$\\gamma$'; break;
	  case 'delta': ch = '$\\delta$'; break;
	  case 'lambda': ch = '$\\lambda$'; break;
	  case 'mu': ch = '$\\mu$'; break;
	  case 'pi': ch = '$\\pi$'; break;
  }
  var value_text = Blockly.JavaScript.valueToCode(block, 'string_input', Blockly.JavaScript.ORDER_NONE);
  var code = ch + value_text;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['string_print'] = function(block) {
  return Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_NONE) + '\n';
};

Blockly.JavaScript['list'] = function(block) {
  
  var dropdown_type = block.getFieldValue('type');
  var code = '';
  if(dropdown_type == 'numeric') code += '\\begin{enumerate}\n'; // uporzadkowana
  else code += '\\begin{itemize}\n'; // nieuporzadkowana
  var list_input = Blockly.JavaScript.statementToCode(block, 'list_input');
  code += list_input;
  if(dropdown_type == 'numeric') code += '\\end{enumerate}\n'; // uporzadkowana
  else code += '\\end{itemize}\n'; // nieuporzadkowana
  return code;
};

Blockly.JavaScript['list_string'] = function(block) {
  
  var dropdown_type = block.getFieldValue('type');
  var code = '';
  if(dropdown_type == 'numeric') code += '\\begin{enumerate}\n'; // uporzadkowana
  else code += '\\begin{itemize}\n'; // nieuporzadkowana
  for(i=0;i<block.itemCount_;i++){
	field_input = Blockly.JavaScript.valueToCode(block, 'ADD' + i, Blockly.JavaScript.ORDER_NONE);//block.getFieldValue('ADD' + i);
	code += '\\item ' + field_input + '\n';
  }
  if(dropdown_type == 'numeric') code += '\\end{enumerate}\n'; // uporzadkowana
  else code += '\\end{itemize}\n'; // nieuporzadkowana
  return code;
};

Blockly.JavaScript['list_item'] = function(block) {
  var code = '\\item ';
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_NONE);
  code += value_text + '\n';
  return code;
};

Blockly.JavaScript['table'] = function(block) {
  var code = '';
  var number_row_count = block.getFieldValue('row_count');
  var number_column_count = block.getFieldValue('column_count');
  //console.log('generate: '+number_row_count+', '+number_column_count);
  code += '\\begin{tabular}{';
  for(i=0;i<block.columnCount_;i++){
    code += '| c ';
  }
  code += '|}\n\\hline\n'
  var value_row;
  //for(i=0;i<this.rowCount_;i++){
	  /*var connection = this.getInput('ROW'+i).connection;
	  if(connection.isConnected()){
		  var target = connection.targetBlock();
		  code += Blockly.JavaScript.valueToCode(target, 'ROW'+i, Blockly.JavaScript.ORDER_NONE);
	  }*/
	  
	  // BŁĄD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	  //var value_row = Blockly.JavaScript.valueToCode(block, 'ROW'+i, Blockly.JavaScript.ORDER_NONE) || '';
	  //code += value_row;
      //if(i < this.rowCount_-1) code += ' \\\\\n\\hline\n';
  //}
  
  code += Blockly.JavaScript.valueToCode(block, 'ROW0', Blockly.JavaScript.ORDER_NONE) || '' ;
  if(0 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW1', Blockly.JavaScript.ORDER_NONE) || '';
  if(1 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW2', Blockly.JavaScript.ORDER_NONE) || '';
  if(2 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW3', Blockly.JavaScript.ORDER_NONE) || '';
  if(3 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW4', Blockly.JavaScript.ORDER_NONE) || '';
  if(4 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW5', Blockly.JavaScript.ORDER_NONE) || '';
  if(5 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW6', Blockly.JavaScript.ORDER_NONE) || '';
  if(6 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW7', Blockly.JavaScript.ORDER_NONE) || '';
  if(7 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW8', Blockly.JavaScript.ORDER_NONE) || '';
  if(8 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW9', Blockly.JavaScript.ORDER_NONE) || '';
  if(9 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW10', Blockly.JavaScript.ORDER_NONE) || '';
  if(10 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW11', Blockly.JavaScript.ORDER_NONE) || '';
  if(11 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW12', Blockly.JavaScript.ORDER_NONE) || '';
  if(12 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW13', Blockly.JavaScript.ORDER_NONE) || '';
  if(13 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW14', Blockly.JavaScript.ORDER_NONE) || '';
  if(14 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW15', Blockly.JavaScript.ORDER_NONE) || '';
  if(15 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW16', Blockly.JavaScript.ORDER_NONE) || '';
  if(16 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW17', Blockly.JavaScript.ORDER_NONE) || '';
  if(17 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW18', Blockly.JavaScript.ORDER_NONE) || '';
  if(18 < this.rowCount_) code += ' \\\\\n\\hline\n';
  code += Blockly.JavaScript.valueToCode(block, 'ROW19', Blockly.JavaScript.ORDER_NONE) || '';
  if(19 < this.rowCount_) code += ' \\\\\n\\hline\n';
  
	  //code += value_row;
      //if(i < this.rowCount_-1) code += ' \\\\\n\\hline\n';
  
  code += '\\end{tabular}';
  return code;
};

Blockly.JavaScript['table_row'] = function(block) {
  var code = '';
  for(i=0;i<this.columnCount_;i++){
	  var value_column = Blockly.JavaScript.valueToCode(block, 'COLUMN'+i, Blockly.JavaScript.ORDER_NONE);
	  //value_column = '1';
	  code += value_column;
	  if(i < this.columnCount_-1) code += ' & ';
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['adapter_vs'] = function(block) {
  var code = Blockly.JavaScript.statementToCode(block, 'statement_input');
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['table3'] = function(block) {
  var code = '';
  var statements_table_input = Blockly.JavaScript.statementToCode(block, 'table_input');
  // TODO: Assemble JavaScript into code variable.
  console.log(this);
  //console.log(this.getConnections_(true));
  code += '\\begin{tablular}\n';
  code += statements_table_input;
  code += '\\end{tabular}';
  return code;
};

Blockly.JavaScript['table_row2'] = function(block) {
  var code = '';
  var value_table_row_input = Blockly.JavaScript.valueToCode(block, 'table_row_input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  code += value_table_row_input;
  code += '\\\\';
  
  return code;
};

Blockly.JavaScript['table_column'] = function(block) {
  var number_span = block.getFieldValue('span');
  var dropdown_align = block.getFieldValue('align');
  var value_string = Blockly.JavaScript.valueToCode(block, 'string', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_string;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['testowy'] = function(block) {
  return '';
};

Blockly.JavaScript['document2'] = function(block) {
  return '';
};

Blockly.JavaScript['block_type'] = function(block) {
  var text_text_field = block.getFieldValue('number_field');
  var number_number_field = block.getFieldValue('number_field');
  var value_value_input = Blockly.JavaScript.valueToCode(block, 'value_input', 
														Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statement_input = Blockly.JavaScript.statementToCode(block, 'statement_input');
  var code = 'wybrany numer: ' + number_number_field + '\n'
			+ 'wartość pola tekstowego: ' + text_text_field + '\n'
			+ 'kod wygenerowany z wejścia "InputValue": ' + value_value_input
			+ 'kod wygenerowany z wejścia "StatementInput": ' + statements_statement_input;
  return code; 
  //return [code, Blockly.JavaScript.ORDER_NONE]; // left connection
};