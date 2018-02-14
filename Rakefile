
task default: %w[test]

desc "Realiza um teste"
task :test do
	puts("Ok, running!")
end

desc "Prepara site"
task :prepare do
	puts("Iniciando preparação do site.")
	# Paginação dos blogs
	en = Integer(`ls -l _posts/en | grep -v ^d | grep -v ^t | wc -l`)/6
	br = Integer(`ls -l _posts/br | grep -v ^d | grep -v ^t | wc -l`)/6
	(2..en).each do |n| # Paginação Inglês
		File.open("blog/page"+n.to_s+".html", 'w'){|f|
			f.write("---\n")
			f.write("layout: kpaginator\n")
			f.write("title: Blog\n")
			f.write("lang: en\n")
			f.write("related:\n")
			f.write("  - update\n")
			f.write("  - projects\n")
			f.write("  - games\n")
			f.write("  - jams\n")
			f.write("num: " + (n-1).to_s + "\n")
			f.write("---")
		}
	end
	(2..br).each do |n| # Paginação Português
		File.open("blog/page"+n.to_s+".html", 'w'){|f|
			f.write("---\n")
			f.write("layout: kpaginator\n")
			f.write("title: Blog\n")
			f.write("lang: br\n")
			f.write("related:\n")
			f.write("  - update\n")
			f.write("  - projects\n")
			f.write("  - games\n")
			f.write("  - jams\n")
			f.write("num: " + (n-1).to_s + "\n")
			f.write("---")
		}
	end
	# Páginas de categorias
	arr = Array.new
	Dir.foreach('category') do |item| # Lista categorias existentes
		next if item == '.' or item == '..'
		nam = item[/[^.]+/]
		arr.push(nam)
	end
	Dir.foreach('_posts/en') do |item| #English
  		next if item == '.' or item == '..'
  		cmd = "sed '5q;d' _posts/en/" + item
  		cat = (`#{cmd}`).gsub(/\s+/m, ' ').strip.split(" ")
  		(1..cat.size-1).each do |i|
  			#puts(cat[i])
  			if not arr.include? cat[i]
  				puts("Atenção: A categoria \""+ cat[i]+ "\", do " + item + ", não existe.")
  			end
  		end
	end
	Dir.foreach('_posts/br') do |item| #Português
  		next if item == '.' or item == '..'
  		cmd = "sed '5q;d' _posts/br/" + item
  		cat = (`#{cmd}`).gsub(/\s+/m, ' ').strip.split(" ")
  		(1..cat.size-1).each do |i|
  			#puts(cat[i])
  			if not arr.include? cat[i]
  				puts("Atenção: A categoria \""+ cat[i]+ "\", do " + item + ", não existe.")
  			end
  		end
	end

	puts("O site esta 100%")
end

desc "Inicializa o servidor"
task :server => ["prepare"] do
	sh "./server.sh"
end