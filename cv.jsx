import React, { useState } from 'react';
import { 
  User, Briefcase, GraduationCap, Code2, Mail, Phone, 
  MapPin, ChevronRight, BarChart3, Database, Bot, LayoutDashboard,
  Award, Calendar
} from 'lucide-react';

const CVInteractivo = () => {
  const [activeTab, setActiveTab] = useState('perfil');

  const navItems = [
    { id: 'perfil', label: 'Perfil', icon: User },
    { id: 'experiencia', label: 'Experiencia', icon: Briefcase },
    { id: 'formacion', label: 'Formación', icon: GraduationCap },
    { id: 'habilidades', label: 'Habilidades', icon: Code2 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'perfil':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Sobre Mí</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-8">
              Perfil técnico especializado en la <span className="text-cyan-400 font-semibold">digitalización de operaciones industriales y comerciales</span>. 
              Capacidad demostrada para transformar procesos manuales de control de stock y compras en flujos automatizados de alta eficiencia. 
              Orientado a la reducción de costos operativos y la toma de decisiones basada en datos empíricos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-colors">
                <Database className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Bases de Datos</h3>
                <p className="text-sm text-slate-400">Dominio avanzado de bases de datos relacionales (SQL).</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
                <Bot className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Automatización</h3>
                <p className="text-sm text-slate-400">Desarrollo de flujos automatizados y agentes inteligentes (Bots).</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
                <BarChart3 className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Visualización</h3>
                <p className="text-sm text-slate-400">Diseño de dashboards estratégicos (Power BI en entornos web).</p>
              </div>
            </div>
          </div>
        );
      
      case 'experiencia':
        return (
          <div className="animate-fadeIn space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Historial Laboral</h2>
            
            {/* Experiencia 1 */}
            <div className="relative pl-8 border-l-2 border-cyan-500">
              <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] top-1"></div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">Data Analyst & Especialista en Inteligencia de Negocios</h3>
                    <p className="text-cyan-400 font-medium">UniTiendas</p>
                  </div>
                  <span className="flex items-center text-sm text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4 mr-2" /> 12/2024 - 12/2025
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start text-slate-300">
                    <ChevronRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Identificación de Cuellos de Botella (SQL & Datos):</strong> Extraje y procesé la base de datos completa del catálogo de productos para identificar fricción. Los insights permitieron pivotar la estrategia, desbloqueando un <span className="text-green-400 font-bold">aumento proyectado del 16%</span> en la facturación trimestral.</span>
                  </li>
                  <li className="flex items-start text-slate-300">
                    <ChevronRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Diseño de Dashboards Estratégicos (Power BI):</strong> Desarrollé y desplegué tableros interactivos embebidos en páginas web para el monitoreo de KPIs de rendimiento en tiempo real.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experiencia 2 */}
            <div className="relative pl-8 border-l-2 border-blue-500">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">Analista de Operaciones y Automatización</h3>
                    <p className="text-blue-400 font-medium">Transportes Barron</p>
                  </div>
                  <span className="flex items-center text-sm text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4 mr-2" /> 08/2023 - 12/2025
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start text-slate-300">
                    <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Escalabilidad Operativa mediante Automatización:</strong> Diseñé e implementé agentes (Bots) para auditar y facturar el 100% de las órdenes. Se eliminó el trabajo manual, permitiendo gestionar un <span className="text-green-400 font-bold">30% más de volumen</span> sin aumentar personal.</span>
                  </li>
                  <li className="flex items-start text-slate-300">
                    <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Supervisión Estratégica y Control de Stock:</strong> Evolucioné el rol de ejecución manual a validación analítica. El sistema cruzaba viabilidad de órdenes con inventario en tiempo real, garantizando cero errores de digitación y trazabilidad exacta.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'formacion':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Formación Académica</h2>
            <div className="grid gap-6">
              {/* Google */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row gap-6 items-center md:items-start hover:border-yellow-500/50 transition-colors">
                <div className="bg-slate-900 p-4 rounded-full border border-slate-700 shrink-0">
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Certificado Profesional Avanzado en Business Intelligence</h3>
                    <span className="text-sm text-slate-400">03/2024 - 08/2024</span>
                  </div>
                  <p className="text-cyan-400 font-medium mb-2">Google (vía Coursera) • Mountain View, USA (100% Remoto)</p>
                  <p className="text-slate-300 text-sm">Modelado de datos en SQL, creación de Dashboards interactivos, Power BI para análisis empresarial.</p>
                </div>
              </div>

              {/* Udacity */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row gap-6 items-center md:items-start hover:border-blue-500/50 transition-colors">
                <div className="bg-slate-900 p-4 rounded-full border border-slate-700 shrink-0">
                  <Bot className="w-8 h-8 text-blue-500" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">RPA & Python Automation Nanodegree</h3>
                    <span className="text-sm text-slate-400">09/2024 - 02/2025</span>
                  </div>
                  <p className="text-cyan-400 font-medium mb-2">Udacity • San Francisco, USA (100% Remoto)</p>
                  <p className="text-slate-300 text-sm">Desarrollo de Bots, automatización de flujos de trabajo (n8n), Python, integración de APIs.</p>
                </div>
              </div>

              {/* UPAO */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row gap-6 items-center md:items-start hover:border-indigo-500/50 transition-colors">
                <div className="bg-slate-900 p-4 rounded-full border border-slate-700 shrink-0">
                  <GraduationCap className="w-8 h-8 text-indigo-400" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Ingeniería Civil</h3>
                    <span className="text-sm text-slate-400">09/2022 - Actual</span>
                  </div>
                  <p className="text-indigo-400 font-medium">Universidad Privada Antenor Orrego • Piura</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'habilidades':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Stack para Manufactura</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Visualización */}
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  <LayoutDashboard className="w-6 h-6 text-yellow-500 mr-3" />
                  <h3 className="text-lg font-bold text-white">Análisis y Visualización</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-slate-900 px-4 py-3 rounded-lg border border-slate-700">
                    <span className="font-semibold text-cyan-400">Power BI</span>
                    <p className="text-sm text-slate-400 mt-1">Avanzado, Dashboards interactivos web</p>
                  </div>
                  <div className="bg-slate-900 px-4 py-3 rounded-lg border border-slate-700">
                    <span className="font-semibold text-green-400">Excel Avanzado</span>
                  </div>
                </div>
              </div>

              {/* Datos */}
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-cyan-500 mr-3" />
                  <h3 className="text-lg font-bold text-white">Gestión de Datos</h3>
                </div>
                <div className="bg-slate-900 px-4 py-3 rounded-lg border border-slate-700 h-[calc(100%-2rem)]">
                  <span className="font-semibold text-blue-400">SQL</span>
                  <p className="text-sm text-slate-400 mt-1">Modelado y consultas en bases de datos relacionales.</p>
                </div>
              </div>

              {/* Automatización */}
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  <Code2 className="w-6 h-6 text-purple-500 mr-3" />
                  <h3 className="text-lg font-bold text-white">Automatización y Desarrollo</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full text-sm font-medium">n8n</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-medium">Bots</span>
                </div>
                <p className="text-sm text-slate-400 bg-slate-900 p-3 rounded-lg border border-slate-700">Creación de Bots, scripts de automatización, digitalización de procesos de registros y costeos.</p>
              </div>

              {/* ERP */}
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-red-500 mr-3" />
                  <h3 className="text-lg font-bold text-white">Sistemas ERP</h3>
                </div>
                <div className="bg-slate-900 px-4 py-3 rounded-lg border border-slate-700 h-[calc(100%-2rem)]">
                  <span className="font-semibold text-red-400">SAP (Módulo QAS)</span>
                  <p className="text-sm text-slate-400 mt-1">Lógica estructural de sistemas de planificación. Preparado para asimilación inmediata.</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-cyan-500/30">
      <style dangerouslySetInnerHTML={{__html: `
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
      
      <div className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR */}
        <div className="w-full md:w-80 shrink-0">
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 sticky top-8">
            {/* Header / Banner de foto */}
            <div className="h-32 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 relative">
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                {/* Avatar Placeholder: En un entorno real, reemplazar img src con tu foto */}
                <div className="w-24 h-24 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden relative group cursor-pointer">
                  <img src="cambiame_el_fondo_202603251817.jpg" alt="Ivan Rodrigo" className="w-full h-full object-cover object-top" onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Ivan+Rodrigo&background=0D8ABC&color=fff&size=200'; }} />
                  <div className="absolute inset-0 bg-black/50 hidden group-hover:flex items-center justify-center transition-all">
                    <span className="text-xs font-bold text-white">Cambiar</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Info personal */}
            <div className="pt-16 pb-6 px-6 text-center border-b border-slate-800">
              <h1 className="text-2xl font-bold text-white tracking-tight">Ivan Rodrigo Pianto</h1>
              <p className="text-cyan-400 font-medium text-sm mt-1">Data Analyst & Especialista en Automatización</p>
            </div>

            {/* Contacto */}
            <div className="p-6 space-y-4">
              <div className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors">
                <MapPin className="w-5 h-5 mr-3 shrink-0" />
                <span className="text-sm">Piura, Perú</span>
              </div>
              <div className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5 mr-3 shrink-0" />
                <span className="text-sm">+51 932543404</span>
              </div>
              <div className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors break-all">
                <Mail className="w-5 h-5 mr-3 shrink-0" />
                <span className="text-sm">rodrigopianto2005@gmail.com</span>
              </div>
            </div>

            {/* Nav Menu Móvil (Visible solo en pantallas pequeñas) */}
            <div className="md:hidden flex overflow-x-auto border-t border-slate-800 p-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex-1 min-w-[100px] flex flex-col items-center py-3 px-2 rounded-lg transition-colors ${
                    activeTab === item.id 
                      ? 'bg-cyan-500/10 text-cyan-400' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <item.icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col">
          
          {/* Navegación Desktop */}
          <div className="hidden md:flex space-x-2 bg-slate-900 p-2 rounded-xl mb-8 border border-slate-800 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 flex-1 justify-center ${
                  activeTab === item.id 
                    ? 'bg-cyan-500/20 text-cyan-400 shadow-sm border border-cyan-500/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent'
                }`}
              >
                <item.icon className={`w-5 h-5 mr-2 ${activeTab === item.id ? 'animate-pulse' : ''}`} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Área de contenido dinámico */}
          <div className="bg-slate-900 p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-800 min-h-[500px]">
            {renderContent()}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CVInteractivo;
